const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

//routes
const client = require("./routes/api/client");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const db = require("./config/keys").mongoURI;
const PORT = require("./config/keys").PORT;

mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log("DB Connected"))
  .catch(err => console.log(err));

//use routes
app.use("/api/client", client);

app.listen(PORT, () => console.log(`PORT: ${PORT}`));
