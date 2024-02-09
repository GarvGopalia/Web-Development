const { faker } = require("@faker-js/faker");
const mysql = require("mysql2");
const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require("method-override");

app.use(methodOverride("_method"));
app.use(express.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'delta_app',
    password: 'garvpmrs7442'
  });

let getRandomUser = () =>  {
    return [
       faker.datatype.uuid(),
       faker.internet.username(),
       faker.internet.email(),
       faker.internet.password(),
    ];
};
//Home route
app.get("/", (req, res) => {
    let q = "SELECT count(*) FROM user";
    try {
        connection.query(q, (err, result) => {
            if (err) throw err;
            let count = result[0]["count(*)"];
            res.render("home.ejs", { count });
        });
    } catch (err) {
        console.log(err);
        res.send("some error in DB");
    }
});

//Show Route
app.get("/user", (req, res) => {
    let q =`SELECT * FROM user`;
    
    try {
        connection.query(q, (err, users) => {
        if (err) throw err;
        res.render("showusers.ejs", { users});
        });
    } catch (err) {
        console.log(err);
        res.send("some error in DB");
    }
});

//EDIT Route
app.get("/user/:id/edit", (req, res) => {
    let {id} = req.params;
    let q = `SELECT * FROM user WHERE id ="${id}"`;
    try {
        connection.query(q, (err, result) => {
            if (err) throw err;
            let user = (result[0])
            res.render("edit.ejs", {user});
        });
    } catch (err) {
        console.log(err);
        res.send("some error in DB");
    }
})

//UPDATE (DB) ROUTE
app.patch("/user/:id", (req, res) => {
    let {id} = req.params;
    let {password: formPass, username: newUsername} = req.body;
    let q = `SELECT * FROM user WHERE id ="${id}"`;
    try {
        connection.query(q, (err, result) => {
            if (err) throw err;
            let user = (result[0])
            if(formPass != user.password) {
                res.send("wrong password");
            }
        });
    } catch (err) {
        console.log(err);
        res.send("some error in DB");
    }
})

app.listen("8080", () => {
    console.log("server is listening to port 8080");
});




// let q = "INSERT INTO user (id, username, email, password) VALUES ?";

// let data = [];
// for(let i=1; i<=100; i++){
//     data.push(getRandomUser());//100 fake users
// }

// //Inserting New Data
// try {
//     connection.query(q, [data], (err, result) =>{
//         if (err) throw err;
//         console.log(result);
//     });  
// } catch {
//     console.log(err);
// }
// connection.end();