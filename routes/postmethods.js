

listPosts = (req, res, next) =>{
  req.models.Post.find().then((posts) => {
    
    return res.send(posts);
  }).catch((error) => {
    next(error)
  })
}

getSinglePost = (req, res) => {
  const post = posts.find(post => post.id == req.params.id)
  res.status(200).send(post)
}

createPost = (req, res, next) => {

  req.models.Post.find().sort({ _id: -1 }).limit(1)
  // Get the latest added post to access it's ID 
    .then((x) => {

      req.models.Post.create({
        userId: req.body.userId,
        id: x[0].id+1,
        title: req.body.title,
        body: req.body.body,
      }).then((post) => {
        return res.status(201).send(post)
      }).catch((error) => {
        next(error)
      })
  })
}

replacePost = (req, res, next) => {

  const replacementPost = {
    id: req.params.id,
    userId: req.body.userId,
    title: req.body.title,
    body: req.body.body,
  }
  req.models.Post.replaceOne({ id: req.params.id }, replacementPost)
    .then((post) => {
      return res.status(200).send(post)
    }).catch((error) => {
      next(error)
    })
}

updatePost = (req, res, next) => {

  const updatedPost = {
    userId: req.body.userId,
    title: req.body.title,
    body: req.body.body,
  }

  req.models.Post.updateOne(
    {id: req.params.id}, 
    updatedPost, 
    { 
      new: true,
      upsert: true,
      runvalidators: true,
     }
    ).then((update) => {
      return res.status(200).send(update)
    }).catch((error) => {
      next(error)
    })

}



deletePost = (req, res, next) => {

  req.models.Post.deleteOne({ 
    id: req.params.id
  }).then((deleted) => {
    if(deleted.n)
      return res.send(deleted).status(200)
    res.sendStatus(204)
  }).catch((error) => {
    next(error)
  })
 
}


module.exports = {
  listPosts,
  getSinglePost,
  createPost,
  replacePost,
  deletePost,
  updatePost
}
