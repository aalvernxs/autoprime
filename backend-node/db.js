const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const DB_PATH = path.join(__dirname, 'autoprime.db');

function init() {
  return new Promise((resolve, reject) => {
    const db = new sqlite3.Database(DB_PATH, (err) => {
      if (err) return reject(err);
    });

    db.serialize(() => {
      db.run(`
        CREATE TABLE IF NOT EXISTS cars (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          marca TEXT,
          modelo TEXT,
          ano INTEGER,
          preco REAL,
          km INTEGER,
          combustivel TEXT,
          fotos TEXT,
          descricao TEXT
        )
      `);

      db.get('SELECT COUNT(1) as cnt FROM cars', (err, row) => {
        if (err) {
          db.close();
          return reject(err);
        }

        if (row && row.cnt === 0) {
          const stmt = db.prepare('INSERT INTO cars (marca, modelo, ano, preco, km, combustivel, fotos, descricao) VALUES (?,?,?,?,?,?,?,?)');
          stmt.run('Honda', 'Civic EXL 2.0', 2023, 145000, 15000, 'Flex', JSON.stringify(['https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=600']), 'Civic description');
          stmt.run('Toyota', 'Corolla XEi', 2022, 138000, 32000, 'Flex', JSON.stringify(['https://images.unsplash.com/photo-1559416523-140ddc3d238c?w=600']), 'Corolla description');
          stmt.run('BMW', 'X5 xDrive', 2023, 420000, 8000, 'Gasolina', JSON.stringify(['https://images.unsplash.com/photo-1556189250-72ba954cfc2b?w=600']), 'BMW description');
          stmt.finalize(() => {
            db.close();
            resolve();
          });
        } else {
          db.close();
          resolve();
        }
      });
    });
  });
}

function getDbConnection() {
  return new sqlite3.Database(DB_PATH);
}

module.exports = { init, getDbConnection };
