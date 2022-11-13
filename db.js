const mongoose = require("mongoose");
const mongoURl = "mongodb://localhost:27017/";
// Now we need to connect to the database
const db = () => {
    mongoose.connect(mongoURl, () => { console.log('Connected to MongoSuccessfully');; }); 
}
module.exports  = db;