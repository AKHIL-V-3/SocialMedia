import mongoose from 'mongoose'
import { model } from "mongoose";

interface Iuser{
      uid:string,
      token:string
}

interface Iotp{
      email:string,
      otp:number
}

const userSchema=new mongoose.Schema({
    uid:String,
    token:String
})

const otpSchema = new mongoose.Schema({

      email:String,
      otp:Number
})


const User = model<Iuser>('Users',userSchema)
const Otp = model<Iotp>('otp',otpSchema)

export {User,Otp}

// module.exports = mongoose.model("User",userSchema)
