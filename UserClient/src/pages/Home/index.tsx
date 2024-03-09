import { Box, Button } from "@mantine/core"
import useAuthHook from "../../hooks/useAuth"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"


const HomePage = ()=>{

     const {LogOut,checkUserLoggedIn} = useAuthHook()
     const navigate = useNavigate()

     const handleLogout = async()=>{
             try{
               await LogOut()
                navigate("/auth/signin")
             }catch(err){
                  console.log(err);     
             }     
     }
     useEffect(()=>{
                checkUserLoggedIn().then((user)=>{
                     if(!user){
                         //    navigate("/auth/signin")
                     }     
                })
                .catch((err)=>{
                      console.log(err);      
                })    
     },[])

       return (
            <>
            <Box
              sx={{
                 display:"flex",
                 justifyContent:"space-around",
                 alignItems:"center"
              }}
            >
             <h1>HOME PAGE AANE</h1>
             <Button onClick={handleLogout}>Logout</Button>
            </Box>
            </>
       )  
}

export default HomePage