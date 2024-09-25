const mongoose = require('mongoose');
const connectDB = async()=>{
    await mongoose.connect(MongoUri).then(()=>{
        console.log("MongoDB connected");
    }).catch((err)=>{
        console.log(err);
    })
}

module.exports = connectDB;