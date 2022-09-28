const express = require("express");
const res = require("express/lib/response");
const app = express();


const PORT = 9000;

console.log(`Server is running on port ${PORT}`);
console.log(`Endpoints: http://127.0.0.1:${PORT}/images \nmethod: GET, POST, DELETE`);

// Endpoint

// GET
app.get("/images", (req, res) => {
  console.log("products GET: received request");
  res.send("getting");
});

// POST
app.post("/images", (req, res) => {
  console.log("products POST: received request");
  res.send("Posting");
});

// DELETE
app.delete("/images", (req, res) => {
  console.log("products DELETE: received request");
  res.send("Deleting");
});

// server listening on port 9000
app.listen(PORT);
