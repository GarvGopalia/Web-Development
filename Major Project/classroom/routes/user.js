const express = require("express");
const router = express.Router();

//Index - users
router.get("/", (req, res) => {
    res.send("GET for user");
})

//Show - users
router.get("/:id", (req, res) => {
    res.send("GET for show user");
})

//POST - users
router.post("/", (req, res) => {
    res.send("POST for user");
})

//DELETE - users
router.delete("/:id", (req, res) => {
    res.send("DELETE for user");
})

module.exports = router;