# API-doc

### http://api.softhouse.rocks

## Endpoints and methods
* /users
  * Available http methods: GET, POST

* /users/{usersId}
  * Available http methods: GET, PUT

* /posts
  * Available http methods: GET, POST

* /posts/{postsId}
  * Available http methods: GET, PUT, PATCH, DELETE

---
## curl interaction
* -i, --include Include protocol response headers in the output
* -H, --header <header/@file> Pass custom header(s) to server
* | jq --Parse response as JSON
* | code . --Opens response in IDE.

---

## /users

### GET
#### Description: 
Fetches all the users

#### Command example:
```sh
curl http://api.softhouse.rocks/users
```

#### Example of body data response:
  Each userobject lies in an object in the array.

```javascript
[
 {
    "address": {
      "geo": {
        "lat": -31.8129,
        "lng": 62.5342
      },
      "street": "Skiles Walks",
      "suite": "Suite 351",
      "city": "Roscoeview",
      "zipcode": "33263"
    },
    "_id": "5e806d9f42fbde006b6b9ec9",
    "id": 5,
    "name": "Chelsey Dietrich",
    "username": "Kamren",
    "email": "Lucio_Hettinger@annie.ca",
    "__v": 0
  },
] 
```

#### Result code: 200 OK 
<br/>
<br/>

### POST
#### Description: 
Posts a user to the API

#### Command example: 
```sh
curl -X POST -H "Content-Type:application/json" http://api.softhouse.rocks/users -d '{"name": "string","username":"string","email": "string","address": {"street": "string","suite": "string","city": "string","zipcode": "string","geo": {"lat": 0,"lng": 0}}}'
```

#### Example of body data response:
```json
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
  "_id": "5e9ff081619a44002135097a",
  "name": "string",
  "username": "string",
  "email": "string",
  "id": 1,
  "__v": 0
}
```

#### Result code: 201 created

---
<br/>
<br/>

## /users/userId

### GET
#### Description: 
Fetches the data of the chosen user

#### Command example:
```sh
curl http://api.softhouse.rocks/users/10
```

#### Example of body data response:
```json
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
  "_id": "5e806d9f42fbde006b6b9ece",
  "id": 10,
  "name": "string",
 
"username": "string",
  "email": "string",
  "__v": 0
}
```

#### Result code: 200 OK
<br/>
<br/>

### PUT
#### Description: 
Replaces the chosen user with what is passed in. In example below, no email is passed in and 
body data response shows email: null.

#### Command example:
```sh
curl -X PUT "https://api.softhouse.rocks/users/382" -H  "accept: application/json" -H  "Content-Type: application/json" -d "{\"name\":\"emma\",\"username\":\"hej\",\"address\":{\"street\":\"string\",\"suite\":\"string\",\"city\":\"string\",\"zipcode\":\"string\",\"geo\":{\"lat\":0,\"lng\":0}}}"
```

#### Example of body data response: 
```json
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
  "_id": "5e9ff081619a44002135097a",
  "name": "emma",
  "username": "hej",
  "email": null,
  "id": 382,
  "__v": 0
}
```


#### Result code: 200

---
<br/>
<br/>

## /posts

### GET
#### Description:
Fetches all the posts from URI.

#### Command example:
```sh
curl "http://api.softhouse.rocks/posts"
```

#### Example of body data response:
  Each postobject lies in an object in the array.
```json
[
  {
    "_id": "5e9ffe55619a44002135097c",
    "body": "string",
    "title": "string",
    "userId": 1,
    "id": 839,
    "__v": 0
  }
]
```


#### Result code:200 OK
<br/>
<br/>

### POST
#### Description: 
Posts a post to the API

#### Command example: 
```sh
curl -X POST "https://api.softhouse.rocks/posts" -H  "accept: application/json" -H  "Content-Type: application/json" -d "{\"title\":\"string\",\"body\":\"string\",\"userId\":382}"
```

#### Example of body data response:
```json
{
  "_id": "5ea004233075e40021162a5a",
  "body": "string",
  "title": "string",
  "userId": 382,
  "id": 841,
  "__v": 0
}
```

#### Result code: 201 created

---
<br/>
<br/>

## /posts/postId

### GET
#### Description:
Fetches a specific

#### Command example:
```sh
curl "http://api.softhouse.rocks/posts/10"
```

#### Example of body data response:
```json
  {
    "_id": "5e806d9f42fbde006b6b9ed8",
    "userId": 5,
    "id": 10,
    "title": "string",
    "body": "string",
    "__v": 0
  }
```

#### Result code: 200 OK
<br/>
<br/>


### PUT
#### Description: 
Replaces the chosen user with what is passed in. In example below, no email is passed in and 
body data response shows email: null.

#### Command example:
```sh
curl -X PUT "https://api.softhouse.rocks/posts/14" -H  "accept: application/json" -H  "Content-Type: application/json" -d "{\"title\":\"string\",\"body\":\"string\",\"userId\":10}"
```

#### Example of body data response: 
```json
{
  "_id": "5e9ed92a3c9c34a2d807f7ea",
  "id": 14,
  "__v": 0,
  "body": "string",
  "title": "string",
  "userId": 10
}
```


#### Result code: 200
<br/>
<br/>


### PATCH
#### Description: 
Updates a postobject with supplied parameters.

#### Command example:
```sh
curl -X PATCH "https://api.softhouse.rocks/posts/10" -H  "accept: application/json" -H  "Content-Type: application/json" -d "{\"title\":\"string\",\"body\":\"string\",\"userId\":5}"
```

#### Example of body data response: 
```json
{
  "n": 1,
  "nModified": 0,
  "opTime": {
    "ts": "6818460289789329409",
    "t": 139
  },
  "electionId": "7fffffff000000000000008b",
  "ok": 1,
  "operationTime": "6818460289789329409",
  "$clusterTime": {
    "clusterTime": "6818460289789329409",
    "signature": {
      "hash": "AAAAAAAAAAAAAAAAAAAAAAAAAAA=",
      "keyId": 0
    }
  }
}
```


#### Result code: 200
<br/>
<br/>

### DELETE
#### Description: 
Deletes a postobject.

#### Command example:
```sh
curl -i -X DELETE "https://api.softhouse.rocks/posts/39"
```

#### Example of body data response: 
```json
OK%
```

#### Result code: (200) if sucessfull, (204) if nothing was deleted.
<br/>
<br/>


