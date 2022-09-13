const express = require("express");
const res = require("express/lib/response");

const app =express();

console.log("Server is listening at http://127.0.0.1:9000/");
console.log("Endpoints: http://127.0.0.1:9000/images \nmethod: GET, POST, DELETE" );

// Endpoint 

// GET
app.get('/images',(req,res)=>{
    console.log("products GET: received request");
    res.send ("getting");
});

// POST
app.post('/images',(req,res)=>{
    console.log("products POST: received request");
    res.send ("Posting");
});

// DELETE
app.delete('/images',(req,res)=>{
    console.log("products DELETE: received request");
    res.send ("Deleting");
});


// server listening on port 9000
app.listen(9000);
