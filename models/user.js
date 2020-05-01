// Mongoose stuff
mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  username: { 
    type: String , 
    unique: true 
  },
  email: {
    type: String,
    unique: true,
  },
  address: {
    street: {
      type: String,
      unique: true
    },
    suite: String,
    city: String,
    zipcode: String,
    geo: {
      lat: {
        type: Number,
      },
      lng: {
        type: Number,
      }
    }
  }
});

const User = mongoose.model('User', userSchema);

module.exports = User;