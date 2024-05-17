const mongoose = require('mongoose');

main()
    .then(() => {console.log("connection successful");
})
    .catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/test');
}

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number
});

const User = mongoose.model("User", userSchema);

User.find({age: {$gt: 20}}).then((res) => {
    console.log(res);
}) .catch((err) => {
    console.log(err);
});

// User.insertMany([
//     {name: "Tony", email: "tony@gmail.com", age: 48},
//     {name: "Strak", email: "strak@gmail.com", age: 40},
//     {name: "Thunder", email: "thunder@gmail.com", age: 26},
// ]).then(res => {
//     console.log(res);
// });

// const user1 = new User({
//     name: "Garv",
//     email: "garv@yahoo.in",
//     age: 20
// });

// user1
//     .save()
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((err) => {
//         console.log(err);
//     });