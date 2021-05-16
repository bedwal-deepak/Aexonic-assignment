# Aexonic-assignment

# 1. Create a registration api (first name, last name, email, password, mobile no, address) (Please use hash and salt for password)

Method:- POST
queryString:- /api/v1/loginapi/signup
Request:-
{
    "FirstName": "Deepak",
    "LastName": "Kumar",
    "email": "dpk@gmail.com",
    "mobile": "9587424257",
    "password": "helloooo",
    "passwordConfirm": "helloooo",
    "address": "fkjhaiohjkahiasfjioajk"
}

Response:-
{
  "status": "success",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwYTE0MWNkYTQxYWM4MjYyMjU0ODNiMiIsImlhdCI6MTYyMTE4MDg3NywiZXhwIjoxNjI4OTU2ODc3fQ.sbGUp38Wqascyu5fK6-UW3NtcsBBUiAuo8HEuDleOWQ",
  "data": {
    "user": {
      "_id": "60a141cda41ac826225483b2",
      "firstName": "Deepak",
      "lastName": "Kumar",
      "email": "dpk@gmail.com",
      "mobile": "9587424257",
      "password": "$2a$12$iOjS7gKliVEh0e1yZG/O9uCchSN/XSa9Mgye7em0isNhSsFMD52Le",
      "address": "fkjhaiohjkahiasfjioajk",
      "__v": 0
    }
  }
}

# 2. Create a login api with auth

Method:- POST
queryString:- /api/v1/loginapi/login
Request:-
{
    "email": "deepakbedwalb5@gmail.com",
    "password": "helloooo"
}

Response:-
{
  "status": "success",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwYTE0MWY4YTQxYWM4MjYyMjU0ODNiMyIsImlhdCI6MTYyMTE4MTA1MywiZXhwIjoxNjI4OTU3MDUzfQ.6G5UK0s-KM9qbkh29e13Jp8HaNGhRGY0hDhA6rEV_aQ"
}

# 3. List api for all users with token and pagination

Method:- GET
queryString:- /api/v1/loginapi/getAllUsers?page=1&limit=2
Include token received while login in authorization as bearer token
Response:-
{
  "status": "success",
  "results": 2,
  "data": {
    "users": [
      {
        "_id": "60a141cda41ac826225483b2",
        "firstName": "Deepak",
        "lastName": "Kumar",
        "email": "dpk@gmail.com",
        "mobile": "9587424257",
        "address": "fkjhaiohjkahiasfjioajk",
        "__v": 0
      },
      {
        "_id": "60a141f8a41ac826225483b3",
        "firstName": "Deepak",
        "lastName": "Kumar",
        "email": "deepakbedwalb5@gmail.com",
        "mobile": "9487424257",
        "address": "fkjhaiohjkahiasfjioajk",
        "__v": 0
      }
    ]
  }
}

# 4. Update user details api with token

METHOD:- PATCH
queryString:- /api/v1/loginapi/60a141cda41ac826225483b2
Include token received while login in authorization as bearer token
Here 60a141cda41ac826225483b2 is userid
Request:-
{
    "firstName": "Ankit",
    "lastName": "Kumar",
    "email": "dpk@gmail.com",
    "mobile": "9587424257",
    "password": "helloooo",
    "address": "fkjhaiohjkahiasfjioajk"
}
Response:-
{
  "status": "sucess",
  "data": {
    "user": {
      "_id": "60a141cda41ac826225483b2",
      "firstName": "Ankit",
      "lastName": "Kumar",
      "email": "dpk@gmail.com",
      "mobile": "9587424257",
      "address": "fkjhaiohjkahiasfjioajk",
      "__v": 0
    }
  }
}

# 5. Search api on (first name, last name, email,  mobile no) single key with token and pagination

METHOD:- GET
queryString:- /api/v1/loginapi/?firstName=Deepak&page=1&limit=1
Include token received while login in authorization as bearer token
Response:-
{
  "status": "success",
  "results": 1,
  "data": {
    "user": [
      {
        "_id": "60a141f8a41ac826225483b3",
        "firstName": "Deepak",
        "lastName": "Kumar",
        "email": "deepakbedwalb5@gmail.com",
        "mobile": "9487424257",
        "address": "fkjhaiohjkahiasfjioajk",
        "__v": 0
      }
    ]
  }
}
