const express = require("express");
const router = express.Router();
const Client = require("../../models/client");

router.get("/test", (req, res) => res.json({ msg: "Test client route works" }));

//@route  POST api/client/
//@desc   post new client
//@access Public

router.post("/", (req, res) => {
  Client.findOne({ client: req.body.client }).then(client => {
    if (client) {
      return res.status(400).json({ msg: "This client already exists" });
    } else {
      const newClient = new Client({
        client: req.body.client
      });

      newClient
        .save()
        .then(client => res.json(client))
        .catch(err => console.log(err));
    }
  });
});

//@route  GET api/client/
//@desc   get all clients
//@access Public

router.get("/", (req, res) => {
  Client.find({})
    .then(clients => res.json(clients))
    .catch(err => console.log(err));
});

//@route  get api/client/:id
//@desc   get client by id
//@access Public

router.get("/:id", (req, res) => {
  Client.findById({ _id: req.params.id })
    .then(client => {
      res.json(client);
      console.log(client.categories);
    })
    .catch(err => console.log(err));
});

module.exports = router;
