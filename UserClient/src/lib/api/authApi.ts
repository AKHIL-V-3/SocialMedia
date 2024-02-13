
import api from './axios'

const authApi = ()=>{

    const signUp = async(user:object)=>{
    
          api.post('/signup',user).then((response)=>{
                 console.log(response);
          })
          .catch((err)=>{

                console.log(err);
                
          })
    }

    return {

          signUp
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


