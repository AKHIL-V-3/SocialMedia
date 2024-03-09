
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

    const sendOtp = async (email:string) =>{

         try{
             const backendResponse = api.post('/sendotp',{email})
         }catch(err){
               console.log(err);    
         }
    }

    const OtpVerification  = async(Otp:object) =>{

      return new Promise((resolve,reject)=>{

            api.post('/verifyOtp',Otp).then((response)=>{
                  resolve(response)  
            })
            .catch((err)=>{
               console.log(err); 
               reject(err) 
            })
      })     
    }

//     const signInverify = (userData:object)=>{
        
//             api.post('/sig')
//     }

    return {

          signUp,
          OtpVerification,
      //     signInverify,
          sendOtp

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


