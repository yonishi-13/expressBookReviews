const express = require('express');
const jwt = require('jsonwebtoken');
let books = require("./booksdb.js");
const regd_users = express.Router();

let users = [];

const doesExist = (username)=>{
    let userswithsamename = users.filter((user)=>{
      return user.username === username
    });
    if(userswithsamename.length > 0){
      return true;
    } else {
      return false;
    }
  }


 
    const authenticatedUser = (username,password)=>{
        let validusers = users.filter((user)=>{
          return (user.username === username && user.password === password)
        });
        if(validusers.length > 0){
          return true;
        } else {
          return false;
        }
      }//returns boolean
//write code to check if username and password match the one we have in records.

//only registered users can login
regd_users.post("/login", (req,res) => {
  //Write your code here
  
    res.send("User succesfully logged in!");
});
  

// Add a book review
regd_users.put("/auth/review/:isbn", (req, res) => {
  //Write your code here

  res.send("Your review has been added");
  return res.status(300).json({message: "Yet to be implemented"});
});


module.exports.authenticated = regd_users;

module.exports.users = users;
