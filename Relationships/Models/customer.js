const mongoose = require("mongoose");
const {Schema} = mongoose;

main()
    .then(() => console.log("connection successful"))
    .catch(err => console.log(err));

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/relationDemo")
}

const  orderSchema = new Schema({
    item: String,
    price: Number
})


const customerSchema = new Schema ({
    name: String,
    order: [
        {
            type: Schema.Types.ObjectId,
            ref: "Order"
        }
    ]
})

// customerSchema.pre("findOneAndDelete", async () => {
//     console.log("PRE MIDDLEWARE")
// });

customerSchema.post("findOneAndDelete", async (data) => {
    if(customerSchema.order.length) {
        let result = await Order.deleteMany({_id: {$in: customerSchema.order} })
        console.log(result)
    }
});

const Order = mongoose.model("Order", orderSchema);
const Customer = mongoose.model("Customer", customerSchema);

// const addCustomer = async () => {
//     let cust1 = new Customer({
//         name: "Garv"
//     });

//     let order1 = await Order.findOne({item: "Chips"})
//     let order2 = await Order.findOne({item: "Chocolate"})

//     cust1.order.push(order1)
//     cust1.order.push(order2)

//     let result = await cust1.save();
//     console.log(result);
// }

// addCustomer();

// const addOrder = async () => {
//     let res = await Order.insertMany([
//         {item: "Saomsa", price: 12},
//         {item: "Chips", price: 20},
//         {item: "Chocolate", price: 40}
//     ])
//     console.log(res);
// }

// addOrder();

const findCustomer = async () => {
    let result = await Customer.find().populate("orders");
    console.log(result[0]);
}

const addCust = async () => {
    let newCust = new Customer({
        name: "Pippu"
    })

    let newOrder = new Order({
        item: "Pizza",
        price: 250
    })

    newCust.order.push(newOrder);

    await newOrder.save();
    await newCust.save();

    console.log("Data added");
}

const delCust = async () => {
    let data = await Customer.findByIdAndDelete();
    console.log(data);
}
// addCust();
delCust();