const mongoose = require("mongoose");
const mongoURl = "mongodb://localhost:27017/inote.users";
// Now we need to connect to the database
// My DB name is inote
// I want to save my users auth details to users collection
const db = () => {
    mongoose.connect(mongoURl, { dbName: inote }, () => { console.log('Connected to MongoSuccessfully'); });
}
module.exports = db;
