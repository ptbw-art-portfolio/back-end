# Art Portfolio API

## Live Backend URL: https://ptbw-art-portfolio.herokuapp.com/

----------------------------------------

### **Register a user**
*method url*: `/auth/signup`

*http method*: **[POST]**

#### Headers

| name           | type   | required | description              |
| -------------- | ------ | -------- | ------------------------ |
| `Content-Type` | String | Yes      | Must be application/json |

#### Body

| name           | type   | required | description              |
| -------------- | ------ | -------- | ------------------------ |
| `fullName`     | String | Yes      |            |
| `username`     | String | Yes      | Must be unique                         |
| `email`     | String | Yes      |                  Must be unique        |
| `password`     | String | Yes      |                          |


#### Example
```
{
	"fullName": "First Last",
	"username": "user1",
	"email" : "user@gmail.com",
	"password" : "NoMoreSecrets"
}
  ```
#### Response
##### 201 (created)
  ###### Example Response
```
 {
  "id": [
    1
  ]
}
  ```
##### 400 (Bad Request)
```
  {
    "message": "missing requred fields"
  }
  ```

--------------------------------------------

  ### **Login**
*method url*: `/auth/login`

*http method*: **[POST]**

#### Headers

| name           | type   | required | description              |
| -------------- | ------ | -------- | ------------------------ |
| `Content-Type` | String | Yes      | Must be application/json |

#### Body

| name           | type   | required | description              |
| -------------- | ------ | -------- | ------------------------ |
| `email`     | String | Yes      |          |
| `password`     | String | Yes      |                          |


#### Example
```
  {
    "email": "user1@mail.com",
    "password": "NoMoreSecrets",
  }
  ```
#### Response
##### 201 (created)
  ###### Example Response
```
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1NzM3ODAxNTksImV4cCI6MTU3Mzc4NzM1OX0.2qdmgftcxSxJUdpBmmlIWskhJMuTkYkkbyOTm9gKmb0",
  "user": {
    "id": 3,
    "fullName": "Rob Towe",
    "username": "robbiess",
    "email": "robtowe@mailss.com",
    "created_at": "2019-11-14T23:42:20.325Z",
    "updated_at": "2019-11-14T23:42:20.325Z"
  }
}
  ```
##### 400 (Bad Request)
```
  {
    "message": "please provide username and password"
  }
```

--------------------------------------------

  ### **Get All Users**
*method url*: `/users`

*http method*: **[GET]**

#### Headers

| name           | type   | required | description              |
| -------------- | ------ | -------- | ------------------------ |
| `Content-Type` | String | Yes      | Must be application/json |

#### Response
##### 200 (ok)
  ###### Example Response
```
{
  "users": [
    {
      "id": 1,
      "fullName": "Rob Towe",
      "username": "robbie",
      "email": "robtowe@mail.com",
      "created_at": "2019-11-14 22:47:30",
      "updated_at": "2019-11-14 22:47:30"
    },
    {
      "id": 2,
      "fullName": "Rob Towe",
      "username": "robbies",
      "email": "robtowe@mails.com",
      "created_at": "2019-11-14 23:22:43",
      "updated_at": "2019-11-14 23:22:43"
    },
    {
      "id": 3,
      "fullName": "Rob Towe",
      "username": "robbiess",
      "email": "robtowe@mailss.com",
      "created_at": "2019-11-14 23:33:19",
      "updated_at": "2019-11-14 23:33:19"
    }
  ]
}
  ```
##### 401 (unauthorized)
```
{
    "name": "JsonWebTokenError",
    "message": "invalid signature"
}
```
--------------------------------------------

  ### **Get All Posts**
*method url*: `/posts`

*http method*: **[GET]**

#### Headers

| name           | type   | required | description              |
| -------------- | ------ | -------- | ------------------------ |
| `Content-Type` | String | Yes      | Must be application/json |

#### Response
##### 200 (ok)
  ###### Example Response
```
{
  "data": [
    {
      "id": 1,
      "title": "title1",
      "medium": "paint",
      "image_url": "someURLsdkfjl",
      "description": "Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Nulla quis lorem ut libero malesuada feugiat. Nulla porttitor accumsan tincidunt. Quisque velit nisi, pretium ut lacinia in, elementum id enim.",
      "likes": 0,
      "created_at": "2019-11-15T02:50:46.622Z",
      "updated_at": "2019-11-15T02:50:46.622Z",
      "user_id": 1
    },
    {
      "id": 2,
      "title": "title2",
      "medium": "paint",
      "image_url": "someURLsdkfjl",
      "description": "Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Nulla quis lorem ut libero malesuada feugiat. Nulla porttitor accumsan tincidunt. Quisque velit nisi, pretium ut lacinia in, elementum id enim.",
      "likes": 0,
      "created_at": "2019-11-15T02:54:37.200Z",
      "updated_at": "2019-11-15T02:54:37.200Z",
      "user_id": 1
    },
    {
      "id": 3,
      "title": "title3",
      "medium": "paint",
      "image_url": "someURLsdkfjl",
      "description": "Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Nulla quis lorem ut libero malesuada feugiat. Nulla porttitor accumsan tincidunt. Quisque velit nisi, pretium ut lacinia in, elementum id enim.",
      "likes": 0,
      "created_at": "2019-11-15T02:55:31.235Z",
      "updated_at": "2019-11-15T02:55:31.235Z",
      "user_id": 1
    }
  ]
}
  ```
##### 401 (unauthorized)
```
{
    "name": "JsonWebTokenError",
    "message": "invalid signature"
}
```

--------------------------------------------

  ### **Get Posts from User by Id**
*method url*: `/users/:userId/posts`

*http method*: **[GET]**

#### Headers

| name           | type   | required | description              |
| -------------- | ------ | -------- | ------------------------ |
| `Content-Type` | String | Yes      | Must be application/json |

#### Response
##### 200 (ok)
  ###### Example Response
```
{
  "data": [
    {
      "id": 1,
      "title": "title1",
      "medium": "paint",
      "image_url": "someURLsdkfjl",
      "description": "Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Nulla quis lorem ut libero malesuada feugiat. Nulla porttitor accumsan tincidunt. Quisque velit nisi, pretium ut lacinia in, elementum id enim.",
      "likes": 0,
      "created_at": "2019-11-15T02:50:46.622Z",
      "updated_at": "2019-11-15T02:50:46.622Z",
      "user_id": 1
    },
    {
      "id": 2,
      "title": "title2",
      "medium": "paint",
      "image_url": "someURLsdkfjl",
      "description": "Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Nulla quis lorem ut libero malesuada feugiat. Nulla porttitor accumsan tincidunt. Quisque velit nisi, pretium ut lacinia in, elementum id enim.",
      "likes": 0,
      "created_at": "2019-11-15T02:54:37.200Z",
      "updated_at": "2019-11-15T02:54:37.200Z",
      "user_id": 1
    },
    {
      "id": 3,
      "title": "title3",
      "medium": "paint",
      "image_url": "someURLsdkfjl",
      "description": "Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Nulla quis lorem ut libero malesuada feugiat. Nulla porttitor accumsan tincidunt. Quisque velit nisi, pretium ut lacinia in, elementum id enim.",
      "likes": 0,
      "created_at": "2019-11-15T02:55:31.235Z",
      "updated_at": "2019-11-15T02:55:31.235Z",
      "user_id": 1
    }
  ]
}
  ```
##### 401 (unauthorized)
```
{
    "name": "JsonWebTokenError",
    "message": "invalid signature"
}
```

--------------------------------------------

  ### **Get Post by Id**
*method url*: `/posts/:id`

*http method*: **[GET]**

#### Headers

| name           | type   | required | description              |
| -------------- | ------ | -------- | ------------------------ |
| `Content-Type` | String | Yes      | Must be application/json |

#### Response
##### 200 (ok)
  ###### Example Response
```
{
  "data": [
    {
      "id": 3,
      "title": "title3",
      "medium": "paint",
      "image_url": "someURLsdkfjl",
      "description": "Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Nulla quis lorem ut libero malesuada feugiat. Nulla porttitor accumsan tincidunt. Quisque velit nisi, pretium ut lacinia in, elementum id enim.",
      "likes": 0,
      "created_at": "2019-11-15T02:55:31.235Z",
      "updated_at": "2019-11-15T02:55:31.235Z",
      "user_id": 1
    }
  ]
}
  ```
##### 401 (unauthorized)
```
{
    "name": "JsonWebTokenError",
    "message": "invalid signature"
}
```
--------------------------------------------

  ### **Create Post**
*method url*: `/posts`

*http method*: **[POST]**

#### Headers

| name           | type   | required | description              |
| -------------- | ------ | -------- | ------------------------ |
| `Content-Type` | String | Yes      | Must be application/json |

#### Body

| name           | type   | required | 
| -------------- | ------ | -------- | 
| `title`     | String | Yes      |  
| `medium`     | String | Yes      | 
| `image_url`     | String | Yes       |
| `description`     | String | Yes      |                          
| `user_id`     | Integer | Yes      |                          


#### Example
```
{
	"title": "title6",
	"medium": "paint",
	"image_url": "someURLsdkfjl",
	"description": "Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Nulla quis lorem ut libero malesuada feugiat. Nulla porttitor accumsan tincidunt. Quisque velit nisi, pretium ut lacinia in, elementum id enim.",
	"user_id": 1
}
  ```
#### Response
##### 201 (created)
  ###### Example Response
```
{
  "message": "Success"
}
  ```
##### 400 (Bad Request)
```
  {
    "message": "missing requred fields"
  }
  ```

--------------------------------------------

  ### **Delete Post by Id**
*method url*: `/posts/:id`

*http method*: **[DELETE]**

#### Headers

| name           | type   | required | description              |
| -------------- | ------ | -------- | ------------------------ |
| `Content-Type` | String | Yes      | Must be application/json |

#### Response
##### 202 (accepted)

##### 401 (unauthorized)
```
{
    "name": "JsonWebTokenError",
    "message": "invalid signature"
}
``` 