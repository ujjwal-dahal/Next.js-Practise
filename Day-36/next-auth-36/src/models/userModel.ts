import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name : { type : String , require : true },
  email : {
    type : String,
    unique : true,
    require : true,
    trim : true
  },

  password : {
    type : String , require : true , select : false
  },
  isVerified : {default:false , type : Boolean}
  ,
  googleId : { type : String}
})

//already model cha bhane create gardaina chaina bhane Naya Model Create garcha
export const User =  mongoose.models.User || mongoose.model("User" , UserSchema)