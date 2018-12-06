const express = require("express");
const bodyParser = require("body-parser");

//routes
const client = require("./routes/api/client")

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//use routes
app.use("/api/client", client);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log(`PORT: ${PORT}`));