// import { Box, Avatar, Button, Container, Input, PasswordInput, Text, useMantineTheme } from "@mantine/core"
// import { Link } from "react-router-dom"
// import GoogleButton from 'react-google-button'
// import { LockClosedIcon } from "@radix-ui/react-icons";
// import {IconLock} from "@tabler/icons-react"

// function SignUpPage() {

//     const theme = useMantineTheme();

//     return (

//         <>
//             <Container>

//                 <Box

//                     sx={{
//                         display: "flex",
//                         flexDirection: "column",
//                         alignItems: "center",

//                     }}
//                 >
//                     <Box

//                         sx={{

//                             width: "100%",
//                             maxWidth: "520px",
//                             // border: "1px solid",
//                             boxShadow: "initial",
//                             display: "flex",
//                             flexDirection: "column",
//                             alignItems: "center",
//                             height: "auto",
//                             paddingLeft: "60px",
//                             paddingRight: "60px",
//                             paddingBottom: "35px",
//                             paddingTop: "10px"
//                         }}
//                     >
//                         <Box

//                             sx={{

//                                 maxWidth: "350px",
//                                 width: "100%",
//                                 display: "flex",
//                                 flexDirection: "column",
//                                 gap: "12px",

//                             }}
//                         >


//                             <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
//                                 <Avatar sx={{
//                                     m: 1,
//                                     borderRadius: "xl",
//                                 }}
//                                     radius={"xl"}
//                                     variant="outline"


//                                 >
//                                      <IconLock/>
//                                 </Avatar>



//                                 <Text fz={"xl"} fw={700} style={{ marginTop: "10px" }}>
//                                     Welcome to ..............
//                                 </Text>
//                             </div>



//                             <Input styles={{ input: { padding: "23px", fontSize: "18px" } }} placeholder="Email" type="email" autoFocus />

//                             <PasswordInput
//                                 sx={{
//                                     input: {
//                                         height: "auto",
//                                         padding: "20px",
//                                     },
                                   
//                                 }}

//                                 style={{

//                                     background: "#BAFF39"
//                                 }}
//                                 placeholder="Password"
//                                 size="lg"


//                             />

//                             <PasswordInput
//                                 sx={{
//                                     input: {
//                                         height: "auto",
//                                         padding: "20px"
//                                     }
//                                 }}
//                                 placeholder="Confirm Password"
//                                 size="lg"
//                             />

//                             <Button

//                                 size="18px"
//                                 variant="filled"
//                                 color="teal"
//                                 sx={{
//                                     height: "45px"
//                                 }}

//                             >
//                                 Signup
//                             </Button>

//                             <div style={{ width: "100%", display: "flex", justifyContent: "space-between" }}>

//                                 <Link className="link" to="#">
//                                     <Button variant="default"> Forgot password?</Button>
//                                 </Link>
//                                 <Link className="link" to="#">
//                                     <Button variant="default">{"Login"}</Button>
//                                 </Link>

//                             </div>

//                             <GoogleButton
//                                 style={{ width: "100%", }}
//                                 type="dark"
//                                 onClick={() => { console.log('Google button clicked') }}
//                             />


//                         </Box>

//                     </Box>



//                 </Box>

//             </Container>

//         </>

//     )

// }

// export default SignUpPage