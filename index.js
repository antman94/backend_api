const express = require('express')
const usersMethods = require('./users')
// const postMethods = require('./posts')

// const { v4: uuidv4 } = require('uuid');
// let users = require('./users');
const app = express()

app.use(express.json())

app.get('/users/:id', users.get(req, res) {
  const user = users.find(user => user.id == req.params.id)
  res.status(200).send(user)
})

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Example app listening on port ${port}!`))


