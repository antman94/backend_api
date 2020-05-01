
const users = require('../users/users')

const { v4: uuidv4 } = require('uuid');

let id = 10;


listUsers = (req, res, next) =>{
  req.models.User.find().then((users) => {
    return res.send(users);
  }).catch((error) => {
    next(error)
  })
}
getSingleUser = (req, res, next) => {
  req.models.User.find({id: req.params.id}).then((user) => {
    return res.send(user);
  })
}

createUser = (req, res, next) => {

  req.models.User.find().count().then((count) => {

    req.models.User.create({
      id: count+1,
      name: req.body.name,
      username: req.body.username,
      email: req.body.email,
      address: {
        street: req.body.address.street,
        suite: req.body.address.suite,
        city: req.body.address.city,
        zipcode: req.body.address.zipcode,
        geo: {
          lat: req.body.address.geo.lat,
          lng: req.body.address.geo.lng,
        }
      }
    }).then((user) => {
      return res.status(201).send(user)
    }).catch((error) => {
      next(error)
    })
  })
}

replaceUser = (req, res, next) => {

  const replacementUser = {
    name: req.body.name,
    username: req.body.username,
    email: req.body.email,
    address: {
      street: req.body.address.street,
      suite: req.body.address.suite,
      city: req.body.address.city,
      zipcode: req.body.address.zipcode,
      geo: {
        lat: req.body.address.geo.lat,
        lng: req.body.address.geo.lng,
      }
    }
  }

  const result = req.models.User.replaceOne({ 
    _id: req.params.id }, 
    replacementUser).then((user) => {
      return res.status(200).send(user)
    }).catch((error) => {
      next(error)
    })
  result.n; // Number of documents matched
  result.nModified; // Number of documents modified

}

module.exports = {
  listUsers,
  createUser,
  replaceUser,
  getSingleUser
}


