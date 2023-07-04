const express = require('express');
let books = require("./booksdb.js");
let isValid = require("./auth_users.js").isValid;
let users = require("./auth_users.js").users;
const public_users = express.Router();


public_users.post("/register", (req,res) => {
  //Write your code here
  return res.status(300).json({message: "Yet to be implemented"});
});const express = require('express');
let books = require("./booksdb.js");
let isValid = require("./auth_users.js").isValid;
let users = require("./auth_users.js").users;
const public_users = express.Router();


public_users.post("/register", (req,res) => {
  //Write your code here
  return res.status(300).json({message: "Yet to be implemented"});
});

// Get the book list available in the shop
public_users.get("/",function (req, res) {
  //Write your code here
  let myPromise = new Promise((resolve,reject) => {
    setTimeout(() => {
        res.send(JSON.stringify(books,null,4));
      resolve("Promise resolved")
    },6000)})
  
});

// Get book details based on ISBN
public_users.get('/isbn/:isbn',function (req, res) {
  //Write your code here
  let myPromise = new Promise((resolve,reject) => {
    setTimeout(() => {
        const ISBN = req.params.ISBN;
  return res.send(books[ISBN]);
      resolve("Promise resolved")
    },6000)})
  
  
 });
  
// Get book details based on author
public_users.delete("/auth/review/:isbn", (req, res) => {
    const ISBN = req.params.ISBN;
    if(books[ISBN])
    {
        delete(books[ISBN]);
    }
    res.send(`Book with the ISBN code  ${ISBN} was deleted.`);
  });


  public_users.get('/author/:author', function (req, res) {
    let myPromise = new Promise((resolve,reject) => {
        setTimeout(() => {
            const author = req.params.author;
            const matchedbooks = [];
            for(const ISBN in books)
            {
                if(books[ISBN] === author)
                {
                    matchedbooks.push[ISBN];
                }
            }
          
            res.json(books[ISBN]);
          resolve("Promise resolved")
        },6000)})
   
  });

// Get all books based on title
public_users.get('/title/:title',function (req, res) {
  //Write your code here
  let myPromise = new Promise((resolve,reject) => {
    const title = req.params.title;
const matchedbooks =[];
for(const ISBN in books)
{
    if(books[ISBN]===title)
    {
        matchedbooks.push[ISBN];
    }
}
    res.json(books[ISBN]);
    setTimeout(() => {
      resolve("Promise resolved")
    },6000)})
 
});

//  Get book review
public_users.get('/review/:isbn',function (req, res) {
  //Write your code here
  const ISBN = req.params.ISBN;
  const reviews = books[ISBN];
  res.send("Great Book!");
 
});


module.exports.general = public_users;


// Get the book list available in the shop
public_users.get('/',function (req, res) {
  //Write your code here
  return res.status(300).json({message: "Yet to be implemented"});
});

// Get book details based on ISBN
public_users.get('/isbn/:isbn',function (req, res) {
  //Write your code here
  return res.status(300).json({message: "Yet to be implemented"});
 });
  
// Get book details based on author
public_users.get('/author/:author',function (req, res) {
  //Write your code here
  return res.status(300).json({message: "Yet to be implemented"});
});

// Get all books based on title
public_users.get('/title/:title',function (req, res) {
  //Write your code here
  return res.status(300).json({message: "Yet to be implemented"});
});

//  Get book review
public_users.get('/review/:isbn',function (req, res) {
  //Write your code here
  return res.status(300).json({message: "Yet to be implemented"});
});

module.exports.general = public_users;
