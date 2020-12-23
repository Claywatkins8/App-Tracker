// require mongoose 
const mongoose = require("mongoose");
require("dotenv").config();
// connection string
const dbUrl = process.env.MONGODB_URI || "mongodb://localhost:27017/application-tracker"

// connnect
mongoose.connect(dbUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex:true,
  useFindAndModify: false
})
.then(function(){
  console.log("Mongodb connected");
})
.catch(function(error){
  console.log("Mongodb error");
  console.log(error);
});


mongoose.connection.on("disconnected", function(){
  console.log("Mongodb disconnected");
});



module.exports = {
  Company: require("./Company"),
  Application: require("./Application"),
  User: require("./User")
};