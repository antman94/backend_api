const express = require('express')
const usersMethods = require('./users')
// const postMethods = require('./posts')

const app = express()
app.use(express.json())

// User methods
app.get('/users', usersMethods.getUsers);

app.get('/users/:id', usersMethods.getSingleUser);

app.post('/users', usersMethods.postUser);

app.put('/users/:id', usersMethods.putUser);

app.delete('/users/:id', usersMethods.deleteUser);


const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Example app listening on port ${port}!`))


