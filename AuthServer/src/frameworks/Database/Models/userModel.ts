import mongoose from 'mongoose'
import { model } from "mongoose";

interface Iuser{
      uid:string,
      token:string
}

interface Iotp{
      uid:string,
      otp:number
}

const userSchema=new mongoose.Schema({
    uid:String,
    token:String
})

const otpSchema = new mongoose.Schema({

      uid:String,
      otp:Number
})


const User = model<Iuser>('Users',userSchema)
const Otp = model<Iotp>('otp',otpSchema)

export {User,Otp}

// module.exports = mongoose.model("User",userSchema)
