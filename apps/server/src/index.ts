import express from 'express';


const app = express();
const port = 4000;

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Example app listening at ${port}`);
});