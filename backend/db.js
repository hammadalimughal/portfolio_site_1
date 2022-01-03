const mongoose = require("mongoose");
const mongoDbUri = "mongodb://localhost:27017/practice?readPreference=primary&appname=MongoDB%20Compass&ssl=false"

const connectionWithDb = () => {
    mongoose.connect(mongoDbUri,()=>{
        console.log("Connection Successfull")
    })
}
module.exports = connectionWithDb;