const router = require("express").Router();
const Image = require("../model/image");
const { postImageValidation } = require("../Routes/validation");
const bodyParser = require("body-parser");

// create application/json parser
var jsonParser = bodyParser.json({limit: "50mb"});
// app.use(bodyParser.urlencoded({limit: "50mb", extended: true, parameterLimit:50000}));

// each type of request counter
var getCounter = 0;
var postCounter = 0;
var deleteCounter = 0;
// Endpoint
// GET
router.get("/images", async (req, res) => {
  console.log("products GET: sending response");
  getCounter++;
  console.log(
    `Processed Request Count --> GET : ${getCounter}, POST : ${postCounter}, Delete : ${deleteCounter}`
  );
  const filter = {};
  const allImages = await Image.find(filter);

  if (allImages.length < 0) {
    res.status(404).send("No images found");
  }

  res.send(allImages);
});

//Get image by id
router.get("/images/:id", async (req, res) => {
  console.log("products GET: sending response");
  getCounter++;
  console.log(
    `Processed Request Count --> GET : ${getCounter}, POST : ${postCounter}, Delete : ${deleteCounter}`
  );
  const filter = { imageID: req.params.id };
  const allImages = await Image.findOne(filter);
  res.send(allImages);
});

// POST
router.post("/images", jsonParser, async (req, res) => {
  postCounter++;
  console.log("products POST: received request");
  console.log(
    `Processed Request Count --> GET : ${getCounter}, POST : ${postCounter}, Delete : ${deleteCounter}`
  );
  const newImage = new Image(req.body);
  // validate data before saving
  const { error } = postImageValidation(req.body);

  if (error) {
    return res.status(400).send("upload failed :" + error.details[0].message);
  }

  try {
    const savedImage = await newImage.save();
    res.status(200).send("Post Image successful");
  } catch (err) {
    res.status(400).send("Post Image failed");
  }
});

// DELETE
router.delete("/images", async (req, res) => {
  deleteCounter++;
  console.log("products DELETE: received request");
  console.log(
    `Processed Request Count --> GET : ${getCounter}, POST : ${postCounter}, Delete : ${deleteCounter}`
  );
  Image.deleteMany({}, (err) => {
    if (err) return res.status(400).send(err);
    res.status(200).send("Delete all images successful");
  });
});

module.exports = router;
