const express = require("express")
const app = express();

const port = 8080;

app.set("view engine", "ejs");

app.listen(port, () => {
    console.log("listening on port");
});

app.get('/', (req,res) => {
    // res.send("this is root folder");
    res.render("home.ejs");
    
});

app.get('/rolldice', (req,res) => {
    // res.send("this is root folder");
    let rollDice = Math.floor(Math.random() * 6) + 1; 
    res.render("rolldice.ejs", {rollDice});
    
});

app.get("/ig/:username", (req,res) => {
    let followers = ["hello","bye","goodbye","tata"];
    let {username} = req.params;
    // console.log(username);
    res.render("insta.ejs", {username, followers});
    
});