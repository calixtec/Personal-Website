const express = require('express');
const router = express.Router();



const mongoose = require( 'mongoose' );
const dbURL = "mongodb://localhost:27017/usersdb";
const Contacts = require('../models/users');

var usersArray = [];

mongoose.connect(dbURL, { useUnifiedTopology: true, useNewUrlParser: true });

mongoose.connection;

exports.home = (req, res) => {
    res.render("home");
};

var users = [
    {
        name: "John Wayne",
        gender: "male"
    },
    {
        name: "Mary Monro",
        gender: "female"
    },
    {
        name: "Charles Bronson",
        gender: "male"
    }
];



// exports.showusers = (req, res) => {
//     res.render("users");
// };
exports.postedSignUpForm = (req, res) => {
    res.render("contact");
};
// exports.postSignUpForm = (req, res) => {
//     res.render("contact", {title: "Contact Us"});
//     };
exports.index = (req, res) => {
    res.render("home");
};
// exports.addUsers = (req, res) => {
//     console.log("in homeController addUser");
//    // if(req.body.name === undefined) {return}
//     var newuserName = req.body.name;
//     console.log("name: " + newuserName);
//     var newuserGender = req.body.gender;
//     console.log("gender: " + newuserGender);
//     var allUsers = users;
//     allUsers.push({ name: newuserName, gender: newuserGender });
//     res.render("users", {
//         allUsers: users, title: "Users List"
//     });
// };
exports.addUsers = (req, res) => {
    console.log("in homeController addUser");
   // if(req.body.name === undefined) {return}
    var newuserName = req.body.name;
    console.log("name: " + newuserName);
    var newuserGender = req.body.gender;
    console.log("gender: " + newuserGender);
    var allUsers = varusersArray;
    allUsers.push({ name: newuserName, gender: newuserGender });
    res.render("users", {
        allUsers: varusersArray, title: "Users List"
    });
};


exports.showUsers = (req, res) => {
    res.render("users", {
        allUsers: users, title: "Users List"
    });
};


exports.postSignUpForm = (req, res) => {
    console.log("in homeController postSignUpForm method");
    res.render("contact", { title: "Contact Us" });
};



var newUserName = req.body.name;
var newUserGender = req.body.gender;
console.log("name " + newUserName);
console.log("gender: " + newUserGender);

let newContact = new Contacts({
    name: newUserName,
    gender: newUserGender
})
newContact.save()
.then ((result) => {
    console.log('New user ${result.name} added successfully');

    usersArray.push({name: NewUserName,gender: newUserGender});
    res.render("users", {
        allUsers: usersArray, title: "Users List"
    })

})
.catch(error => {
    res.send(error);
});



