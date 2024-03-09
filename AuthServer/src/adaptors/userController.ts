
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
            res.status(200).json(data)

        } catch (error) {

            next(error)
        }
    }

    async sendOtp(req:Request,res:Response,next:NextFunction){

             try{
                const {email} = req.body
                const getotp = await main({email:email}) 
                const otpData = {
                    email:req.body.email,
                    otp:getotp
               }
                const storedOtp = await this.interactor.createOtp(otpData) 
                res.status(200).json(storedOtp)
             }catch(err){
                  next(err)
             }
    }


    async verifyOtp(req:Request,res:Response,next:NextFunction){

        console.log(req.body,'bbbbbbbbb');
        


          try{
              const {otp,email} = req.body
              const  otpdata = {otp:parseInt(otp),email}
              const otpVerified = await this.interactor.verifyOtp(otpdata)
              if(otpVerified.message === "otpverification successful"){
                  const otpRemoved = await this.interactor.removeOtp(otpdata)
                  res.status(200).json({message:otpVerified.message})
              }else{
                res.status(500).json({message:otpVerified.message})
              }
              
          }catch(err){
             next(err)
          }
    }
}