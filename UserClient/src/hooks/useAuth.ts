import { createUserWithEmailAndPassword ,UserCredential} from "firebase/auth";
import { authConfig } from "../lib/firebase";
import authApi from "../lib/api/authApi";



const api = authApi()
const useAuthHook = () => {


    const signupWithEmail = async(email:string,password:string,confirmpass:string) => {

           if(email.trim().length === 0) throw "Email is required"
           if(email.trim().length < 2) throw "Email is not valid"
           if(password.trim() !== confirmpass.trim()) throw "password should be same"

             const user = await createUserWithEmailAndPassword(authConfig,email,password)
             const idToken = await user.user.getIdToken().catch((err)=> {throw err});

             console.log(user);
             

             const data = {
                  uid: user.user.uid,
                  token: idToken,
                  email:user.user.email
             }
              
              const  response = await api.signUp(data)
              return response
             
     }

   const verifyOtp = async(data:any)=>{

          const userOtp = {
                 otp:data?.otp,
                 uid:data?.uid?.uid
          }         
       

          if(userOtp?.otp.trim().length === 0) throw "Otp is required" 
          const verify = await api.OtpVerification(userOtp)
   }

     return{

          signupWithEmail,
          verifyOtp
     }

}

export default useAuthHook