const posts = require('./posts')

const { v4: uuidv4 } = require('uuid');

getPosts = (req, res) => {
  res.status(200).send(posts)
}

getSinglePost = (req, res) => {
  const post = posts.find(post => post.id == req.params.id)
  res.status(200).send(post)
}

postPost = (req, res) => {
  const newId = uuidv4();
  const newPost = {
    _id: newId,
    userId: req.body.userId,
    id: posts.length +1,
    title: req.body.title,
    body: req.body.body,
  }
  res.status(201).send(newPost);
  posts.push(newPost);
}

putPost = (req, res) => {
  const post = posts.find(post => post.id == req.params.id)
  const { id, _id } = post;
  const { body, title, userId} = req.body;
  const updatedPost = {_id, userId, id, title, body}
  res.status(201).send(updatedPost);
  // lägg till det från din stationära dator.
}

deletePost = (req, res) => {
  const i = posts.findIndex(post => post.id == req.params.id);
  if(i == -1) {
    res.status(204).send();
  }
  else {
    posts.splice(i, 1)
    res.status(200).send();
  }
}


module.exports = {
getPosts,
getSinglePost,
postPost,
putPost,
deletePost,
}
