
const users = require('./users')

const { v4: uuidv4 } = require('uuid');

module.exports = {
  getUsers,
  getUser,
  postUser,
  putUser,
  deleteUser
}





getUsers = (req, res) =>{
  res.send(users)
}

getUser = (req, res) => {
  const user = users.find(user => user.id == req.params.id)
  res.status(200).send(user)
}

postUser = (req, res) => {
  const newId = uuidv4();
  const newUser = {
    name: req.body.name,
    username: req.body.username,
    email: req.body.email,
    _id: newId,
    id: users.length +1,
  }
  res.status(201).send(newUser);
  users.push(newUser);
}

putUser = (req, res) => {
  const user = users.find(user => user.id == req.params.id)
  const { id, _id } = user;
  const { name, username, email} = req.body;
  const updatedUser = {name, username, email, _id, id}
  // lägg till det från din stationära dator.
}

deleteUser = (req, res) => {
  const i = users.findIndex(user => user.id == req.params.id);
  if(i == -1) {
    res.status(204).send();
  }
  else {
    users.splice(i, 1)
    res.status(200).send();
  }
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