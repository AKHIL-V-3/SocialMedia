
import { Request,Response,NextFunction } from "express";
import { userInteractorInterface } from "../applications/interface/userInteractorInterface";
import { main } from "../frameworks/Mail";


export class userController {


    private interactor:userInteractorInterface

    constructor(interactor:userInteractorInterface){

           this.interactor = interactor
    }


    async createUser(req: Request, res: Response,next:NextFunction) {

        try {

            const userData = {
                  uid:req.body.uid,
                  token:req.body.token
            }

            const data = await this.interactor.createUser(userData)

           const getotp = await main({uid:req.body.uid,email:req.body.email})

           const otpData = {
                  uid:req.body.uid,
                  otp:getotp
           }
            const sendOtp = await this.interactor.createOtp(otpData) 

            console.log(sendOtp);
            
            res.status(200).json(data)

        } catch (error) {

            next(error)
        }
    }


    async verifyOtp(req:Request,res:Response,next:NextFunction){
          try{
              const {otp,uid} = req.body
              const  otpdata = {otp:parseInt(otp),uid}
              const otpVerified = await this.interactor.verifyOtp(otpdata)
              if(otpVerified.message === "otpverification successful"){
                  res.status(200).json({message:otpVerified.message})
              }else{
                res.status(500).json({message:otpVerified.message})
              }
              
          }catch(err){
             next(err)
          }
    }
}