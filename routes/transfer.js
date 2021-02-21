const express = require("express");
const router = express.Router();
const User = require("../models/user");
const Transfer = require("../models/transaction");

router.post("/new", async (req, res) => {
    try {
        console.log("here");
        const sender = await User.findById(req.body.senderId);
        const reciever = await User.findById(req.body.recieverId);
        if (sender.balance < req.body.amount) {
            return res.status(500).send("Insufficient Balance");
        }
        let transfer = new Transfer({
            sender: sender.name,
            senderId: req.body.senderId,
            reciever: reciever.name,
            recieverId: req.body.recieverId,
            amount: req.body.amount,
            date: new Date(Date.now())
        });
        console.log(transfer);
        transfer.save((err, addedTranfer) => {
            if (err) {
                console.log("error in transfer");
                console.log(err);
                return res.status(500).send("Something went wrong!");
            }
            else {
                console.log(addedTranfer);
                senderBal = sender.balance;
                sender.balance = senderBal - req.body.amount;
                recieverBal = reciever.balance;
                reciever.balance = recieverBal + req.body.amount;
                sender.save(err => {
                    if (err) {
                        console.log("error in sender save");

                        console.log(err);

                        Transfer.findByIdAndDelete(addedTranfer._id);
                        return res.status(500).send("Something went wrong!");
                    }
                    else {
                        reciever.save(err => {
                            if (err) {
                                console.log("error in reciever");
                                console.log(err);

                                Transfer.findByIdAndRemove(addedTranfer._id).exec();
                                sender.balance = senderBal;
                                sender.save();
                                return res.status(500).send("Something went wrong!");
                            }
                            else {
                                return res.status(200).send("Transaction succeded");
                            }
                        })
                    }
                });

            }
        })


    }
    catch (err) {
        console.log("in catch");
        console.log(err);
        if (addedTranfer) {
            Transfer.findByIdAndRemove(addedTranfer._id, (err, data) => {
                if (err) {
                    console.log(err);
                }
                else console.log(data);
            });
            sender.balance = senderBal;
            sender.save();
        }
        return res.status(500).send("Something went wrong!");
    }

});

router.get("/", (req, res) => {
    Transfer.find({}, function (err, users) {
        if (!err) {
            return res.status(200).send(users);
        }
        else {
            return res.status(500).send("something went wrong");
        }
    })
});

module.exports = router;
