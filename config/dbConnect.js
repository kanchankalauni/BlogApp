const mongoose = require("mongoose")

async function dbConnect() {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/blogDatabase")
        console.log("Db Connected successfully")
    } catch (err) {
        console.log("error occured while connecting DB")
        console.log(err)
    }
}

module.exports = dbConnect