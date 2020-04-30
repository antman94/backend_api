
const users = require('./users')

const { v4: uuidv4 } = require('uuid');







getUsers = (req, res) =>{
  res.status(200).send(users)
}

getSingleUser = (req, res) => {
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
  if(user) {
    const { id, _id } = user;
    const { name, username, email} = req.body;
    const updatedUser = {name, username, email, _id, id}
    res.status(200).send(updatedUser)
  }

  else{
    res.status(400).send('The given user ID does not exist.');
  }

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


module.exports = {
  getUsers,
  getSingleUser,
  postUser,
  putUser,
  deleteUser
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