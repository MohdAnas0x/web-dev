const express = require('express');
const app = express();
const port = 8080;
const path = require("path");

app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

let posts = [
    {
        username: "apnacollege",
        content: "I love coding"
    },
    {
        username: "jim",
        content: "I do coding"
    },
    {
        username: "steve",
        content: "I do development"
    },

]

app.get("/post", (req, res) => {
    res.render("index.ejs", { posts });
})

app.post("/post", (req, res) => {
    let { username, content } = req.body;
    posts.push({ username, content });
    // res.render("index.ejs", { posts });
    res.send("working");
})

app.get("/post/new", (req, res) => {
    res.render("new.ejs");
})

app.get("/", (req, res) => {
    res.send("server on");
})

app.listen(port, () => {
    console.log("Listening");
});



