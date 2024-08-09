import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
const app = express()
const port = process.env.PORT;
const githubData = {
    "login": "octocat",
    "id": 1
}

app.get('/', (req, res) => {
  res.send('Server is ready')
});

app.get('/api/jokes', (req, res) => {
    const jokes = [
      {
        id:1,
        title:'Joke 1',
        content: 'This is a joke'
      },

      {
        id:2,
        title:'Joke 1',
        content: 'This is a joke'
      },

      {
        id:3,
        title:'Joke 1',
        content: 'This is a joke'
      }
    ];
    res.send(jokes);
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
});