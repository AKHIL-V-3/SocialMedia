
import { Box, Divider, Button, Container, Text, TextInput, Title, Avatar, PasswordInput } from "@mantine/core"
import AuthenticationButton from "../../../Components/AuthenticationButtons"
import { IconLock } from "@tabler/icons-react"
import GoogleIcon from "../../../assets/google-logo.png"
import facebookIcon from "../../../assets/facebook-logo0.png"
import { Link } from "react-router-dom"
import useAuthHook from "../../../hooks/useAuth"
import { useForm } from '@mantine/form';
import { useNavigate } from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDisclosure } from '@mantine/hooks';
import { Modal } from '@mantine/core';
import { Email } from "../ForgotPassword"
import { useState } from "react"





const SignInPage = () => {


    const navigate = useNavigate()
    const { signInWithEmail, signInWithGoogle, signInwithFacebook } = useAuthHook()

    const notify = (message: string) => toast(message);

    const [opened, { open, close }] = useDisclosure(false);

    const form = useForm({
        initialValues: { email: '', password: '' },
        validate: {
            email: (value: string) => {
                return value ?
                    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
                        ? null
                        : 'Please enter a valid email address'
                    : "Please enter your email address"
            },
            password: (value: string) => {
                if (value.length < 1) return 'Enter your password'
                if (value.length < 6) return 'Password should be atlease 6 characters'
                return null;
            },
        }
    });

    const handleSubmit = async (values: { email: string, password: string }) => {

        try {
            const response = await signInWithEmail(values.email, values.password)

            if (response.user) {
                navigate('/')
            }
        } catch (err: any) {
            notify(err)
        }

    }


    const googleSignIn = async()=>{
        try{
            await signInWithGoogle()
            navigate("/")
        }catch(err){
              console.log(err);  
        }
    }
    const FacebookSignIn = async()=>{
        try{
         await signInwithFacebook()    
        //  navigate("/")        
        }catch(err){
              console.log(err);  
        }
    }

    return (

        <>
            <ToastContainer />
            <Container>


                <Box
                    sx={{
                        width: "100%",
                        height: "100%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        // background: "#000",
                    }}
                >
                    <Modal opened={opened} onClose={close} centered={true} padding={30} title="Enter your email address">
                        <Email onClose = {close}/>
                    </Modal>


                    <Box
                        sx={{
                            width: "40%",
                            height: "75%",
                            display: "flex",
                            justifyContent: "center"
                        }}
                    >
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                gap: "10px",
                                width: "100%"
                            }}
                        >
                            <Avatar sx={{ m: 1, bgcolor: "grey.3" }} radius={"xl"} color="indigo" variant="outline">
                                <IconLock />
                            </Avatar>
                            <Title>Welcome to Crepuscle</Title>

                            <Box
                                sx={{
                                    width: "100%",
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "12px"
                                }}
                                mt={13}
                                mb={30}

                            >

                               <Box onClick={googleSignIn}> <AuthenticationButton content="Signin with Google" image={GoogleIcon} /></Box> 
                               <Box onClick={FacebookSignIn}><AuthenticationButton content="Signin with facebook" image={facebookIcon} /></Box> 

                                <Divider
                                    size="xs"
                                    labelPosition="center"
                                    mt={20}
                                    mb={10}
                                    opacity={0.60}
                                />


                                <Box
                                    component="form"
                                    onSubmit={form.onSubmit((values) => handleSubmit(values))}
                                >


                                    <Box
                                        sx={{ marginTop: "8px" }}
                                    >
                                        <Text sx={{ fontSize: "16px", fontWeight: "bold", marginBottom: "3px" }}>Email Address</Text>
                                        <TextInput

                                            style={{ boxShadow: "none" }}
                                            sx={{ input: { padding: "20px" }, }}
                                            size="lg"
                                            placeholder="name@domain.com"
                                            {...form.getInputProps('email')}
                                        // onChange={(e)=>setEmail(e.target.value)}

                                        />
                                    </Box>
                                    <Box
                                        sx={{ marginTop: "8px" }}
                                    >
                                        <Text sx={{ fontSize: "16px", fontWeight: "bold", marginBottom: "3px" }}>Password</Text>
                                        <PasswordInput
                                            sx={{ input: { padding: "20px" } }}
                                            size="lg"
                                            placeholder="***********"
                                            {...form.getInputProps('password')}
                                        // onChange={(e)=>setPassword(e.target.value)}
                                        />

                                    </Box>
                                    <Button
                                        mt={20}
                                        sx={{
                                            height: "45px",
                                            borderRadius: "24px"
                                        }}
                                        fullWidth variant="filled"
                                        type="submit"
                                    // onClick={handleSubmit}
                                    >SignIn
                                    </Button>

                                </Box>

                                <Box style={{ display: "flex", justifyContent: "center", width: "100%" }}><Box sx={{ cursor: "pointer" }} onClick={open}><span>Forgot Your Password</span></Box></Box>

                                <Divider
                                    size="xs"
                                    labelPosition="center"
                                    mt={20}
                                    mb={10}
                                    opacity={0.60}
                                />

                                <div style={{ display: "flex", justifyContent: "center", width: "100%" }}><Text>Don't have an account?            <Link to="/auth/signup" >Signup for Crepuscle</Link></Text></div>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Container>
        </>
    )
}

export default SignInPage