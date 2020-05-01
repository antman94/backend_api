const usersMethods = require('./usermethods')
const postMethods = require('./postmethods')

const express = require('express')

const router = express.Router();

// User methods
router.get('/users', usersMethods.listUsers);
router.get('/users/:id', usersMethods.getById);
router.post('/users', usersMethods.createUser);
router.put('/users/:id', usersMethods.updateUser);
router.delete('/users/:id', usersMethods.deleteUser);

// Post methods

router.get('/posts', postMethods.listPosts)
router.get('/posts/:id', postMethods.getSinglePost)
router.post('/posts', postMethods.createPost)
router.put('/posts/:id', postMethods.updatePost)
router.delete('/posts/:id', postMethods.deletePost)


module.exports = router;