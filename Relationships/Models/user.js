<<<<<<< HEAD
const mongoose = require("mongoose");
const {Schema} = mongoose;

main()
    .then(() => console.log("connection successful"))
    .catch(err => console.log(err));

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/relationDemo")
}

const  userSchema = new Schema({
    username: String,
    addresses: [
        {
            _id: false,
            location: String,
            city: String
        },
    ],
})

const User = mongoose.model("User", userSchema);

const addUsers = async() => {
    let user1 = new User({
        username: "Garv Gopalia",
        addresses: [{
            location: "96 bank colony ",
            city: "Alwar"
        }]
    })

    user1.addresses.push({location: "31, Suncity", city: "Indore"});
    let result = await user1.save();
    console.log(result);
}

=======
const mongoose = require("mongoose");
const {Schema} = mongoose;

main()
    .then(() => console.log("connection successful"))
    .catch(err => console.log(err));

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/relationDemo")
}

const  userSchema = new Schema({
    username: String,
    addresses: [
        {
            _id: false,
            location: String,
            city: String
        },
    ],
})

const User = mongoose.model("User", userSchema);

const addUsers = async() => {
    let user1 = new User({
        username: "Garv Gopalia",
        addresses: [{
            location: "96 bank colony ",
            city: "Alwar"
        }]
    })

    user1.addresses.push({location: "31, Suncity", city: "Indore"});
    let result = await user1.save();
    console.log(result);
}

>>>>>>> origin/main
addUsers();