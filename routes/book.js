let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
const { request } = require('../config/app');
 
//connect to our book model
let Book = require('../model/books');
//GET router for the book list page  - read operation 
router.get('/', (req,res,next)=>{
    Book.find((err, BookList) => {
        if (err){
            return console.error(err);
        }
        else{
            console.log(BookList);
        }
    });
});

module.exports = router;