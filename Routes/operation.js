const router = require("express").Router();
const Image = require("../model/image");
const {postImageValidation} = require("../Routes/validation");

// Endpoint
// GET
router.get("/images", (req, res) => {
  console.log("products GET: sending response");
  res.send("getting");
});

// POST
router.post("/images", (req, res) => {
  console.log( JSON.stringify(req.body));

  const {error} = postImageValidation(req.body);

  if(error){
    return res.status(400).send(error.details[0].message);
  }

  console.log("products POST: received request");
  res.send("Posting");
});

// DELETE
router.delete("/images", (req, res) => {
  console.log("products DELETE: received request");
  res.send("Deleting");
});

module.exports = router;
