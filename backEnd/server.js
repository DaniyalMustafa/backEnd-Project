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
  res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
    res.send('twitter account')
})

app.get('/login', (req, res) => {
    res.send('Login Page')
})

app.get('/github', (req, res) => {
    res.json(githubData)
})

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})