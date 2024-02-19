
import { resolvePath } from 'react-router-dom';
import api from './axios'

const authApi = ()=>{

    const signUp = async(user:object)=>{

         try{
            const response = await api.post('/signup',user)
            return response
         }catch(err){
             console.log(err);   
         }    
          
    }

    const OtpVerification  = async(Otp:object) =>{

         console.log(Otp);
         

          api.post('/verifyOtp',Otp).then((response)=>{
                console.log(response); 
                return response 
          })
          .catch((err)=>{
             console.log(err);
             
          })
    }

    return {

          signUp,
          OtpVerification

    }
}

export default authApi








// const baseQuery = fetchBaseQuery({
//     baseUrl: "http://localhost:5000/auth",
//     credentials: "include",
//     prepareHeaders(headers:any, api: any) {
//         const token = api.getState().user.accessToken;
//         console.log(token);
        
//         if (token) headers.set("Authorization", `Bearer ${token}`);
//         return headers;
//     },
// });


