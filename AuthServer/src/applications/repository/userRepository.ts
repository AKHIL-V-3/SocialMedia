import { userEntity,otpEntity } from "../../entities/userEntity";
import { userRepositoryInterface } from "../interface/userRepositoryInterface";
import {User , Otp} from "../../frameworks/Database/Models/userModel";

// import rabbitMqConnection from "../../Frameworks/Rabbitmq";


export class userRepository implements userRepositoryInterface {

   
    async createUser(data: userEntity):Promise<any> {

        try{
            const newUser = new User({   
                  uid:data.uid,
                  token:data.token,
            })
           const response = await newUser.save()
           return response

        }catch(err){
              console.log(err);   
        }          
        
    }

    async createOtp (data: otpEntity):Promise <any>{
           try{
              const newOtp = new Otp({
                     email:data.email,
                     otp:data.otp
              })
              const response = await newOtp.save()
              return response
           }catch(err){
               console.log(err);  
           }
    }

    async verifyOtp (data: otpEntity):Promise <any> {
                       
          try{
             const response = await Otp.findOne({email:data.email})
             if(response.otp === data.otp) return {...response, message:"otpverification successful"}
             else return {message:"otp is not valid"}    
          }catch(err){
            console.log(err); 
          }
    }

    async removeOtp (data: otpEntity):Promise <any> {

          try{
             const response = await Otp.deleteOne({email:data.email})
             return response
          }catch(err){
              console.log(err);  
          }
    }

    

    
}