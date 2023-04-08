const express = require("express");
const app = express();
const port = 5050;
const path = require("path");

app.use("/", express.static(path.join(__dirname, "/public")));

app.get("/index", (req, res) =>{
    res.sendFile(path.join(__dirname, "./public/index.html"));
});
app.get("/about", (req, res) =>{
    res.sendFile(path.join(__dirname, "./public/about.html"));
});
app.get("/contact", (req, res) =>{
    res.sendFile(path.join(__dirname, "./public/contact.html"));
});
app.get("/homepage", (req, res) =>{
    res.sendFile(path.join(__dirname, "./public/homepage.html"));
});
app.use((req, res) =>{
    res.sendFile(path.join(__dirname, "./public/404.html"));
});

app.listen(port, ()=> console.log(`testing app listening on port ${port}!`));