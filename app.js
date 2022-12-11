require('dotenv').config();


const express = require("express");
const app = express();
const PORT = 5003;
const mongoose = require("mongoose");

// const uri = `mongodb+srv://${process.env.MONGO_ROOT_USER}:${process.env.MONGO_ROOT_PASSWORD}@imagedb.8lgestd.mongodb.net/ImageDatabase?retryWrites=true&w=majority`
const uri = `mongodb+srv://${process.env.MONGO_ROOT_USER}:${process.env.MONGO_ROOT_PASSWORD}@imagedb.8lgestd.mongodb.net/?retryWrites=true&w=majority`
console.log(`Server is running on port ${PORT}`);
console.log(`Endpoints: http://127.0.0.1:${PORT}/images \nmethod: GET, POST, DELETE`);

const imagesRoute = require('./Routes/operation');
app.use("", imagesRoute);

// function to connect to the database
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
