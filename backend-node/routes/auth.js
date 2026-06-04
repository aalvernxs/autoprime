const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

const SECRET = process.env.JWT_SECRET || 'change_this_secret';

router.post('/login', (req, res) => {
  const { email, senha } = req.body;
  // placeholder: usuário fixo
  if ((email === 'admin' || email === 'admin@local') && senha === 'admin') {
    const token = jwt.sign({ sub: 'admin', role: 'admin' }, SECRET, { expiresIn: '8h' });
    return res.json({ token });
  }
  return res.status(401).json({ error: 'Credenciais inválidas' });
});

module.exports = router;
