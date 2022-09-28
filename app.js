const express = require("express");
const res = require("express/lib/response");
const app = express();
const PORT = 9000;
const mongoose = require("mongoose");

const uri = 'mongodb+srv://testing123:testing123@cluster0.f4oscys.mongodb.net/?retryWrites=true&w=majority'
console.log(`Server is running on port ${PORT}`);
console.log(`Endpoints: http://127.0.0.1:${PORT}/images \nmethod: GET, POST, DELETE`);

const imagesRoute = require('./Routes/operation');
app.use("", imagesRoute);


async function connect() {
  try{
      await mongoose.connect(uri)
      console.log("Connected to database");
  }
  catch(err){
      console.log(err);
  }
}

connect();

// server listening on port 9000
app.listen(PORT);
