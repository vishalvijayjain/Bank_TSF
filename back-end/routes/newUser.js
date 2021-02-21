const express = require("express");
const router = express.Router();
const User = require("../models/user");

router.post("/new", (req, res) => {
    var newUser = new User({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        balance: req.body.balance
    });
    newUser.save((err, addedUser) => {
        if (err) {
            console.log("----------erorr-----------");
            return res.send("500").status("something went wrong!");
        } else {
            console.log(addedUser);
            return res.send("200").status("User added");
        }
    });
});

router.get("/", (req, res) => {
    User.find({}, function (err, users) {
        if (!err) {
            res.status(200).send(users);
        }
        else {
            res.status(500).send("something went wrong");
        }
    })
});

module.exports = router;
