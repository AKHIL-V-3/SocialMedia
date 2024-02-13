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
              
            const   response = api.signUp(data)

              

              return idToken
             
     }

     return{

          signupWithEmail
     }

}

export default useAuthHook