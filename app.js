import express from 'express';

const app = express();

app.get('/api', (req, res) => {
  res.send({ hi: 'there' });
});
app.post('/api');
app.put('/api');
app.delete('/api');

export default app;
