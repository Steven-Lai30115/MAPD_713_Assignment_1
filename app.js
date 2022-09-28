const express = require("express");
const res = require("express/lib/response");
const app = express();


const PORT = 9000;

console.log(`Server is running on port ${PORT}`);
console.log(`Endpoints: http://127.0.0.1:${PORT}/images \nmethod: GET, POST, DELETE`);

const imagesRoute = require('./Routes/operation');
app.use("", imagesRoute);


// server listening on port 9000
app.listen(PORT);
