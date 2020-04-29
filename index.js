const express = require('express')
const usersMethods = require('./users')
const postMethods = require('./posts/index.js')

const app = express()
app.use(express.json())

// User methods
app.get('/users', usersMethods.getUsers);

app.get('/users/:id', usersMethods.getSingleUser);

app.post('/users', usersMethods.postUser);

app.put('/users/:id', usersMethods.putUser);

app.delete('/users/:id', usersMethods.deleteUser);

// Post methods

app.get('/posts', postMethods.getPosts)
app.get('/posts/:id', postMethods.getSinglePost)
app.post('/posts', postMethods.postPost)
app.put('/posts/:id', postMethods.putPost)
app.delete('/posts/:id', postMethods.deletePost)



const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Example app listening on port ${port}!`))


