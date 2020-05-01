
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

getSingleUser = (req, res) => {
  const user = users.find(user => user.id == req.params.id)
  res.status(200).send(user)
}

createUser = (req, res, next) => {
  const newId = uuidv4();
  id++;
  req.models.User.create({
    id: id,
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
}

updateUser = (req, res, next) => {

  const updatedUser = {
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

  const user = req.models.User.findOneAndUpdate(
    {"id": req.params.id}, 
    updatedUser, 
    { new: true, }
    ).then((update) => {
      return res.status(200).send(update)
    }).catch((error) => {
      next(error)
    })

  

    
  


}


deleteUser = (req, res) => {
  const i = users.findIndex(user => user.id == req.params.id);
  if(i == -1) {
    res.status(204).send();
  }
  else {
    const deletedUser = users.splice(i, 1)
    res.status(200).send(`User ${deletedUser[0].id} successfully deleted.`);
  }
}

/* getById = (req, res, next) => {
  req.models.User.findById(req.params.id).then((user) => {
    return res.send(user);
  })
} */
getById = (req, res, next) => {
  req.models.User.find({id: req.params.id}).then((user) => {
    return res.send(user);
  })
}


module.exports = {
  listUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
  getById
}



















// app.get('/users', function(req, res){
//   res.send(users)
// })

// app.get('/users/:id', function(req, res) {
//   const user = users.find(user => user.id == req.params.id)
//   res.status(200).send(user)
// })

// app.post('/users', function (req, res) {
//   const newId = uuidv4();
//   const newUser = {
//     name: req.body.name,
//     username: req.body.username,
//     email: req.body.email,
//     _id: newId,
//     id: users.length +1,
//   }
//   res.status(201).send(newUser);
//   users.push(newUser);
// })

// app.put('/users/:id', (req, res)=> {
//   const user = users.find(user => user.id == req.params.id)
//   const { id, _id } = user;
//   const { name, username, email} = req.body;
//   const updatedUser = {name, username, email, _id, id}
//   // lägg till det från din stationära dator.
// })

// app.delete('/users/:id', function(req, res) {
//   const i = users.findIndex(user => user.id == req.params.id);
//   if(i == -1) {
//     res.status(204).send();
//   }
//   else {
//     users.splice(i, 1)
//     res.status(200).send();
//   }
// })