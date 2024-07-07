const express = require("express");
const app = express();

let port = 3000;

app.listen(port, () => {
    console.log(`app is listening on port ${port}`);
});

app.get("/", (req, res) => {
    res.send("hello, I am root")
});

app.get("/apple", (req, res) => {
    res.send("you contacted apple path")
});

app.get("/orange", (req, res) => {
    res.send("you contacted orange path")
});

app.post("/", (req, res) => {
    res.send("you sent a post request to root")
});

app.get("/:username/:id", (req, res) => {
    let {username, id} = req.params;
    let htmlStr =  `<h1>welcome to the page of @${username}!</h1>`
    res.send(htmlStr)
})

app.get("/search", (req, res) => {
    let {q} = req.query;
    if(!q) {
        res.send("<h1>noting is searched</h1>")
    }
    res.send(`<h1>search results for query: ${q}</h1>`);
});

// app.get("*", (req, res) => {
//     res.send("this path doesn't exist")
// });
// app.use((req, res) => {
//     console.log("request received");
//     let code = "<h1>Fruits</h1><ul><li>apple</li><li>orange</li></ul>"
//     res.send(code);
// });