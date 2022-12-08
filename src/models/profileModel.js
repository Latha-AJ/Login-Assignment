const mongoose = require("mongoose")

const ProfileSchema = new mongoose.Schema({
  name: {
  type:String,
  require: true
  },
  email:{
    type:String,
    require: true,
    unique: true
  },
  phone: {
    type: String,
    require: true,
    unique: true
  },
  password:{
    type: String,
    require: true,
    unique: true
  },
  photo:{
    type: String
  }
},{timestamps:true})

module.exports = mongoose.model("Profiles", ProfileSchema )


// name, password, email, phone, photo