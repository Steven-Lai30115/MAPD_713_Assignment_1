const express = require("express");
const res = require("express/lib/response");

const app =express();



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
