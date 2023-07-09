# User Management Backend 
Design a user management backend system using ExpressJs and MongoDB, alloing users to register and login account

## Features
- User Registration
- User login

### Config
In config/db.js:
- Set your database connection parameters

In functionality
- Mandatory field to register - Name, Email, and Password
- Mandatory field to login - Email and Passsword

In .env file:
- PORT=<your node env>,
- MONGO_URL=<your email for password reset>

## Api Endpoints
### Register
Method: POST    <br>
Endpoint: /register     <br>
Payload: { "name":"user_name", "email":"user_email", "password":"user_password" }       <br>
Response: { "msg":"User Registered Successfully" }

### Login
Method: POST  <br>
Endpoint: /login    <br>
Payload: { "email":"user_email", "password":"user_password" }   <br>
Response: { "msg":"User Login Successfully" }


## Usage

### Install
- `npm init, express, dotenv && cors`


### Run
- `npm run start`
