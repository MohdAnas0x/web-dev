const express = require("express");
const app = express();
const port = 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(port, () => {
    console.log("Listening");
});

app.get("/", (req, res) => {
    res.send("Hello");
});

app.get("/register", (req, res) => {
    let {user, pass} = req.query;
    res.send(`Get response ${user}`);
});

app.post("/register", (req, res) => {
    let {user, pass} = req.body;
    res.send(`post response ${user}`);
});