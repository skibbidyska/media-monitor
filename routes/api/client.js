const express = require("express");
const router = express.Router();
const Client = require("../../models/client");


router.get("/test", (req, res) => res.json({msg: "Test client route works"}));

router.post("/", (req,res) => {
    Client.findOne({client: req.body.client})
    .then(client => {
        if(client) {
            return res.status(400).json({msg: "This client already exists"});
        }
        else{
            const newClient = new Client({
                client: req.body.client
            });

            newClient
                .save()
                .then(client => res.json(client))
                .catch(err => console.log(err));
        }
    })
})


module.exports = router;

