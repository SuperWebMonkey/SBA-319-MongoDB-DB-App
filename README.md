# Express Store Website

This project contains different routes that shows the users, item, and orders.
Each data collection has a get, post, delete, and put operations using mongoose.

# requirements

1. an ide to run it (vscode highly recommended)
2. Install node 
3. Install express (npm i express)
4. Install Mongoose (npm i mongoose)
4. postman or vscode postman (highly recommended)

## Installation

1. git clone https://github.com/SuperWebMonkey/SBA-319-MongoDB-DB-App.git
2. cd SBA-319-MongoDB-DB-App
3. npm install
4. npm start dev

## Features

- Api routes to different pages
- Navigate the different requests using the browser
- Use postman to get the collection or to make an HTTP request

## how to use

- Go to the api route
- Use the postman app or vscode extension
- Select the http request GET, PUT, POST, DELETE
- For post and put requests, put in the header Content-Type for the key and
  application/json for the data.
- Also for post and put, create an object and add all key value pairs that
  are necessary for the request. 
- Delete just needs the api at the end 

## api endpionts

- localhost:3000 | home
- localhost:3000/users | shows the entire user collection
- localhost:3000/users/:id | Show the specific user based on the id
- localhost:3000/items | shows the entire items collection
- localhost:3000/items:id | shows the specific item based on id
- GET localhost:3000/users | returns the list of all users
- POST localhost:3000/users | POST new user to users
- PUT localhost:3000/users:id | Updates the specific user
- DELETE localhost:3000/users:id | Delete the specific user
- GET localhost:3000/items | returns the list of all items
- POST localhost:3000/items | POST new item to items
- PUT localhost:3000/items:id | Updates the specific item
- DELETE localhost:3000/items:id | Delete the specific item

## Tech Stack Used

- JS
- Mongoose
- MongoDB
- Express
