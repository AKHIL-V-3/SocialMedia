import { Box, Avatar, Divider, Container, Title, TextInput, Button, Image, Text, Stepper, CheckIcon, Progress } from "@mantine/core"
import { IconLock } from "@tabler/icons-react"
import AuthenticationButton from "../../../Components/AuthenticationButtons"
import GoogleIcon from "../../../assets/google-logo.png"
import facebookIcon from "../../../assets/facebook-logo0.png"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { userActions } from "../../../lib/redux/Slice/UserSlice"
import { useForm } from '@mantine/form';
import useAuthHook from "../../../hooks/useAuth"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Notification } from '@mantine/core';




function SignUpPage() {

    const navigate = useNavigate()
    const [active, setActive] = useState(0);
    const nextStep = () => setActive((current) => (current < 3 ? current + 1 : current));
    const dispatch = useDispatch()
    const { checkEmaiexist, sendOtp,signInWithGoogle,signInwithFacebook } = useAuthHook()
    const notify = (message: string) => toast(message);

    const form = useForm({
        initialValues: { email: '' },
        validate: {
            email: (value: string) => value ?
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
                    ? null
                    : 'Please enter a valid email address'
                : "Please enter your email address"
        }
    });

    const sumbit = async (values: { email: string }) => {
        dispatch(userActions.addEmail(values.email));
        const response = await checkEmaiexist(values.email)
        if (response && response.length > 0) {
            console.log('Email is already in use');
            notify('Email is already in use')
        } else {

            const response = await sendOtp(values.email)


            navigate("/auth/signup/step2");
            if (nextStep) {
                nextStep();
            }
        }
    }

    const googleSignup = async()=>{
        try{
            await signInWithGoogle()
            navigate("/")
        }catch(err){
              console.log(err);  
        }
    }
    const FacebookSignup = async()=>{
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



                    <Box
                        sx={{
                            width: "40%",
                            height: "100%",
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

                            {/* <Box
                                style={{
                                    width: "100%",
                                    marginBottom:"30px"
                                }}
                            >
                                <Progress radius="xl" size="xs" value={33.33} />
                            </Box> */}

                            

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
                            >
                                <form onSubmit={form.onSubmit((values) => sumbit(values))}>
                                    <Box
                                        sx={{ marginTop: "8px" }}
                                    >
                                        <Text sx={{ fontSize: "16px", fontWeight: "bold", marginBottom: "3px" }}>Email Address</Text>

                                        <TextInput
                                            sx={{ input: { padding: "20px" } }}
                                            size="lg"
                                            placeholder="name@domain.com"
                                            // required
                                            {...form.getInputProps('email')}
                                        />
                                    </Box>
                                    <Button
                                        sx={{
                                            height: "45px",
                                            borderRadius: "24px",
                                            marginTop: "12px"
                                        }}
                                        fullWidth variant="filled"
                                        type="submit"
                                    // onClick={() => handleGetEmail()}
                                    >Next
                                    </Button>
                                </form>
                                <Divider
                                    my="lg"
                                    label="or"
                                    labelPosition="center"
                                    opacity={0.60}
                                />
                                <Box onClick={googleSignup}>
                                <AuthenticationButton content="Signup with Google" image={GoogleIcon} />
                                </Box>
                                <Box onClick={FacebookSignup}>
                                <AuthenticationButton content="Signup with facebook" image={facebookIcon} />
                                </Box>

                                <Divider
                                    size="xs"
                                    labelPosition="center"
                                    mt={20}
                                    mb={10}
                                    opacity={0.60}
                                />

                                <div style={{ display: "flex", justifyContent: "center", width: "100%" }}><Text>Already have an account?      <Link to="/auth/signin" >Log in here</Link></Text></div>

                            </Box>
                        </Box>
                    </Box>
                </Box>

            </Container>

        </>
    )
}

export default SignUpPage