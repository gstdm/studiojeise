const express = require('express');
const router = express.Router();
const connectDB = require('./db');

router.get('/conteudo', async (req, res) => {
  const db = await connectDB();
  const data = await db.collection('conteudoSite').findOne({});
  res.json(data || {});
});

router.post('/conteudo', async (req, res) => {
  const db = await connectDB();
  const novoConteudo = req.body;

  await db.collection('conteudoSite').deleteMany({});
  await db.collection('conteudoSite').insertOne(novoConteudo);

  res.json({ status: 'salvo' });
});

module.exports = router;
