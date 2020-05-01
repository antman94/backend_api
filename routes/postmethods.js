const posts = require('../posts/posts')

const { v4: uuidv4 } = require('uuid');

listPosts = (req, res) => {
  res.status(200).send(posts)
}

getSinglePost = (req, res) => {
  const post = posts.find(post => post.id == req.params.id)
  res.status(200).send(post)
}

createPost = (req, res) => {
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

updatePost = (req, res) => {
  const post = posts.find(post => post.id == req.params.id)
  if(post) {
    const { id, _id } = post;
    const { body, title, userId} = req.body;
    const updatedPost = {_id, userId, id, title, body}
    res.status(201).send(updatedPost);
  }
  else{
    res.status(400).send('The given post ID does not exist.');
  }

}




deletePost = (req, res) => {
  const i = posts.findIndex(post => post.id == req.params.id);
  if(i == -1) {
    res.status(204).send();
  }
  else {
    const deletedPost = posts.splice(i, 1)
    res.status(200).send(`Post ${deletedPost[0].id} successfully deleted.`);
  }
}


module.exports = {
  listPosts,
  getSinglePost,
  createPost,
  updatePost,
  deletePost,
}