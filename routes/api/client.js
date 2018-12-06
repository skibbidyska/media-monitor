const express = require("express");
const router = express.Router();

router.get("/test", (req, res) => res.json({msg: "Test client route works"}));


module.exports = router;

