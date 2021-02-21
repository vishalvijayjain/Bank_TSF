var mongoose = require("mongoose"),
    User = require("./models/user");
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

var data = [
    {
        name: "Vishal",
        email: "vishalvijayjain@yahoo.com",
        phone: 9874563210,
        balance: 1000
    },
    {
        name: "Karan",
        email: "karan@yahoo.com",
        phone: 9454514562,
        balance: 3000
    },
    {
        name: "Lay",
        email: "bhima@me.com",
        phone: 9874563210,
        balance: 1000
    },
    {
        name: "Hedy",
        email: "jsnover@icloud.com",
        phone: 9674563212,
        balance: 10000
    },
    {
        name: "Jesica",
        email: "gbacon@sbcglobal.net",
        phone: 8452364789,
        balance: 5420
    },
    {
        name: "Latanya",
        email: "bigmauler@hotmail.com",
        phone: 7542369841,
        balance: 6800
    },
    {
        name: "Phylicia",
        email: "parrt@outlook.com",
        phone: 7458963658,
        balance: 8752
    },
    {
        name: "Danilo",
        email: "mccurley@aol.com",
        phone: 9745862189,
        balance: 5874
    },
    {
        name: "Lance",
        email: "ranasta@yahoo.ca",
        phone: 8547158468,
        balance: 12000
    },
    {
        name: "Fran",
        email: "sscorpio@att.net",
        phone: 8745962145,
        balance: 7950
    }
];

function seedDB() {

    data.forEach(function (seed) {
        User.create(seed, function (err, user) {
            if (err)
                console.log(err);
            else {
                user.save()
                console.log("added a user");
            }
        });
    });
};
module.exports = seedDB;