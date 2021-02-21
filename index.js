const express = require("express");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");
var session = require("express-session");
const connectMongDB = require("./db-connection.js");
const seedDB = require("./seedDB");
const newUser = require("./routes/newUser");
const transfer = require("./routes/transfer");

app.set("view engine", "ejs");

connectMongDB();
// seedDB();
app.use(cors({ origin: "https://banktsf.herokuapp.com", credentials: true }));

app.use(
    bodyParser.urlencoded({
        extended: true
    })
);
app.use(bodyParser.json());

app.use("/user", newUser);
app.use("/transfer", transfer);

app.listen(3001, () => {
    console.log("Server listening on port 3001");
});