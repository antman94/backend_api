
const express = require('express')



const app = express()

const port = process.env.PORT || 3000;

app.get('/users', function(req, res){
  res.send(users)
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))


 const users = [
  {
    "address": {
      "geo": {
        "lat": -68.6102,
        "lng": -47.0653
      },
      "street": "Douglas Extension",
      "suite": "Suite 847",
      "city": "McKenziehaven",
      "zipcode": "59590-4157"
    },
    "_id": "5e806d9f42fbde006b6b9ec7",
    "id": 3,
    "name": "Clementine Bauch",
    "username": "Samantha",
    "email": "Nathan@yesenia.net",
    "__v": 0
  },
  {
    "address": {
      "geo": {
        "lat": -71.4197,
        "lng": 71.7478
      },
      "street": "Norberto Crossing",
      "suite": "Apt. 950",
      "city": "South Christy",
      "zipcode": "23505-1337"
    },
    "_id": "5e806d9f42fbde006b6b9eca",
    "id": 6,
    "name": "Mrs. Dennis Schulist",
    "username": "Leopoldo_Corkery",
    "email": "Karley_Dach@jasper.info",
    "__v": 0
  },
  {
    "address": {
      "geo": {
        "lat": 0,
        "lng": 0
      },
      "street": "string",
      "suite": "string",
      "city": "string",
      "zipcode": "string"
    },
    "_id": "5e806d9f42fbde006b6b9ec8",
    "id": 4,
    "name": "string",
    "username": "string",
    "email": "string",
    "__v": 0
  },
  {
    "address": {
      "geo": {
        "lat": -43.9509,
        "lng": -34.4618
      },
      "street": "Victor Plains",
      "suite": "Suite 879",
      "city": "Wisokyburgh",
      "zipcode": "90566-7771"
    },
    "_id": "5e806d9f42fbde006b6b9ec6",
    "id": 2,
    "name": "Ervin Howell",
    "username": "Antonette",
    "email": "Shanna@melissa.tv",
    "__v": 0
  },
  {
    "address": {
      "geo": {
        "lat": -37.3159,
        "lng": 81.1496
      },
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874"
    },
    "_id": "5e806d9f42fbde006b6b9ec5",
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "__v": 0
  },
  {
    "address": {
      "geo": {
        "lat": -37.3159,
        "lng": 81.1496
      },
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Shire",
      "zipcode": "92998-3874"
    },
    "_id": "5e806d9f42fbde006b6b9ec9",
    "id": 5,
    "name": "Frodo Baggins",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "__v": 0
  },
  {
    "address": {
      "geo": {
        "lat": 24.8918,
        "lng": 21.8984
      },
      "street": "Rex Trail",
      "suite": "Suite 280",
      "city": "Howemouth",
      "zipcode": "58804-1099"
    },
    "_id": "5e806d9f42fbde006b6b9ecb",
    "id": 7,
    "name": "Kurtis Weissnat",
    "username": "Elwyn.Skiles",
    "email": "Telly.Hoeger@billy.biz",
    "__v": 0
  },
  {
    "address": {
      "geo": {
        "lat": 24.6463,
        "lng": -168.8889
      },
      "street": "Dayna Park",
      "suite": "Suite 449",
      "city": "Bartholomebury",
      "zipcode": "76495-3109"
    },