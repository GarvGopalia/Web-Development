<<<<<<< HEAD
const express = require("express");
const app = express();
const users = require("./routes/user.js")
const post = require("./routes/posts.js")
const path = require("path");
const session = require("express-session");
const flash = require("connect-flash");

app.set("view engine","ejs");
app.set("views", path.join(__dirname, "views"));

const sessionOptions = {
    secret: "mysupersecretstring",
    resave: false,
    saveUninitialized: true
}

app.use(session(sessionOptions));
app.use(flash());   

app.use((req, res, next) => {
    res.locals.successMsg = req.flash("success");
    res.locals.errorMsg = req.flash("error");
    next();
})

app.get("/register", (req, res) => {
    let {name = "annonymous"} = req.query;
    req.session.name = name;
    if(name === "annonymous"){
        req.flash("error", "user not registered ")
    } else {
        req.flash("success", "user registered successfully")
    }      
    res.redirect("/hello")
});

app.get("/hello", (req, res) => {
    
    res.render("page.ejs", {name: req.session.name})
});

// app.get("/reqcount", (req, res) => {
//     if(req.session.count) {
//         req.session.count++;
//     } else {
//         req.session.count = 1;  
//     }
//     res.send(`You sent a request ${req.session.count} times`);
// })

// app.get("/test", (req, res) => {
//     res.send("test successful");
// })

app.listen(3000, () => {
    console.log("server is listening to port 3000");
=======
const express = require("express");
const app = express();
const users = require("./routes/user.js")
const post = require("./routes/posts.js")
const path = require("path");
const session = require("express-session");
const flash = require("connect-flash");

app.set("view engine","ejs");
app.set("views", path.join(__dirname, "views"));

const sessionOptions = {
    secret: "mysupersecretstring",
    resave: false,
    saveUninitialized: true
}

app.use(session(sessionOptions));
app.use(flash());   

app.use((req, res, next) => {
    res.locals.successMsg = req.flash("success");
    res.locals.errorMsg = req.flash("error");
    next();
})

app.get("/register", (req, res) => {
    let {name = "annonymous"} = req.query;
    req.session.name = name;
    if(name === "annonymous"){
        req.flash("error", "user not registered ")
    } else {
        req.flash("success", "user registered successfully")
    }      
    res.redirect("/hello")
});

app.get("/hello", (req, res) => {
    
    res.render("page.ejs", {name: req.session.name})
});

// app.get("/reqcount", (req, res) => {
//     if(req.session.count) {
//         req.session.count++;
//     } else {
//         req.session.count = 1;  
//     }
//     res.send(`You sent a request ${req.session.count} times`);
// })

// app.get("/test", (req, res) => {
//     res.send("test successful");
// })

app.listen(3000, () => {
    console.log("server is listening to port 3000");
>>>>>>> origin/main
});