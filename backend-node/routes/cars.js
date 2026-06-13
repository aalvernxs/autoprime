const express = require('express');
const router = express.Router();
const dbModule = require('../db');

router.get('/', (req, res) => {
  const db = dbModule.getDbConnection();
  const { marca, ano, preco, termo } = req.query;
  
  let query = 'SELECT * FROM cars WHERE 1=1';
  const params = [];
  
  // Filtro por marca
  if (marca && marca !== '') {
    query += ' AND marca = ?';
    params.push(marca);
  }
  
  // Filtro por ano
  if (ano && ano !== '') {
    query += ' AND ano = ?';
    params.push(parseInt(ano));
  }
  
  // Filtro por preço
  if (preco && preco !== '') {
    if (preco === 'ate-50000') {
      query += ' AND preco <= 50000';
    } else if (preco === '50000-100000') {
      query += ' AND preco > 50000 AND preco <= 100000';
    } else if (preco === '100000-200000') {
      query += ' AND preco > 100000 AND preco <= 200000';
    } else if (preco === 'acima-200000') {
      query += ' AND preco > 200000';
    }
  }
  
  // Filtro por termo de busca (marca, modelo, descrição)
  if (termo && termo !== '') {
    query += ' AND (marca LIKE ? OR modelo LIKE ? OR descricao LIKE ?)';
    const searchTerm = `%${termo}%`;
    params.push(searchTerm, searchTerm, searchTerm);
  }
  
  db.all(query, params, (err, rows) => {
    db.close();
    if (err) return res.status(500).json({ error: err.message });
    // parse fotos JSON
    const parsed = rows.map(r => ({ ...r, fotos: r.fotos ? JSON.parse(r.fotos) : [] }));
    res.json(parsed);
  });
});

router.get('/:id', (req, res) => {
  const db = dbModule.getDbConnection();
  db.get('SELECT * FROM cars WHERE id = ?', [req.params.id], (err, row) => {
    db.close();
    if (err) return res.status(500).json({ error: err.message });
    if (!row) return res.status(404).json({ error: 'Not found' });
    row.fotos = row.fotos ? JSON.parse(row.fotos) : [];
    res.json(row);
  });
});

router.post('/', (req, res) => {
  const { marca, modelo, ano, preco, km, combustivel, fotos, descricao } = req.body;
  const db = dbModule.getDbConnection();
  db.run(
    'INSERT INTO cars (marca, modelo, ano, preco, km, combustivel, fotos, descricao) VALUES (?,?,?,?,?,?,?,?)',
    [marca, modelo, ano, preco, km, combustivel, JSON.stringify(fotos || []), descricao],
    function (err) {
      if (err) {
        db.close();
        return res.status(500).json({ error: err.message });
      }
      const id = this.lastID;
      db.get('SELECT * FROM cars WHERE id = ?', [id], (err2, row) => {
        db.close();
        if (err2) return res.status(500).json({ error: err2.message });
        row.fotos = row.fotos ? JSON.parse(row.fotos) : [];
        res.status(201).json(row);
      });
    }
  );
});

router.put('/:id', (req, res) => {
  const { marca, modelo, ano, preco, km, combustivel, fotos, descricao } = req.body;
  const db = dbModule.getDbConnection();
  db.run(
    'UPDATE cars SET marca=?, modelo=?, ano=?, preco=?, km=?, combustivel=?, fotos=?, descricao=? WHERE id=?',
    [marca, modelo, ano, preco, km, combustivel, JSON.stringify(fotos || []), descricao, req.params.id],
    function (err) {
      if (err) {
        db.close();
        return res.status(500).json({ error: err.message });
      }
      db.get('SELECT * FROM cars WHERE id = ?', [req.params.id], (err2, row) => {
        db.close();
        if (err2) return res.status(500).json({ error: err2.message });
        if (!row) return res.status(404).json({ error: 'Not found' });
        row.fotos = row.fotos ? JSON.parse(row.fotos) : [];
        res.json(row);
      });
    }
  );
});

router.delete('/:id', (req, res) => {
  const db = dbModule.getDbConnection();
  db.run('DELETE FROM cars WHERE id = ?', [req.params.id], function (err) {
    db.close();
    if (err) return res.status(500).json({ error: err.message });
    if (this.changes === 0) return res.status(404).json({ error: 'Not found' });
    res.status(204).send();
  });
});

module.exports = router;
