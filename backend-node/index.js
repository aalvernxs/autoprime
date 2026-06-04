const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

const carsRouter = require('./routes/cars');
const authRouter = require('./routes/auth');
const db = require('./db');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

app.use('/cars', carsRouter);
app.use('/auth', authRouter);

app.get('/', (req, res) => {
  res.json({ ok: true, message: 'AutoPrime backend running' });
});

db.init()
  .then(() => {
    app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
  })
  .catch(err => {
    console.error('Failed to initialize DB', err);
    process.exit(1);
  });
