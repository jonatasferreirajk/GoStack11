import express from 'express';

const app = express();

app.get('/', (req, res) => {
  return res.json({message: 'Hello World TypeScript!'});
});

app.listen(3333);