import { Box, Avatar, Divider, Container, Title, TextInput, Button, Image, Text, Stepper } from "@mantine/core"
import { IconLock } from "@tabler/icons-react"
import AuthenticationButton from "../../../Components/AuthenticationButtons"
import GoogleIcon from "../../../assets/google-logo.png"
import facebookIcon from "../../../assets/facebook-logo0.png"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { userActions } from "../../../lib/redux/Slice/UserSlice"




function SignUpPage() {



    const navigate = useNavigate()
    const [active, setActive] = useState(0);
    const nextStep = () => setActive((current) => (current < 3 ? current + 1 : current));
    const [email, setEmail] = useState("")

    const dispatch = useDispatch()

    const handleGetEmail = ()=>{
          dispatch(userActions.addEmail(email))   
          navigate("/auth/signup/step2")  
          nextStep 
    }

    return (
        <>

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
                            <Box sx={{ width: "100%" }} pb={20}>
                                <Stepper active={active} onStepClick={setActive}>
                                    <Stepper.Step />
                                    <Stepper.Step />
                                    <Stepper.Step />
                                </Stepper>
                            </Box>

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
                                <Box
                                    sx={{ marginTop: "8px" }}
                                >
                                    <Text sx={{ fontSize: "16px", fontWeight: "bold", marginBottom: "3px" }}>Email Address</Text>
                                    <TextInput
                                        sx={{ input: { padding: "20px" } }}
                                        size="lg"
                                        placeholder="name@domain.com"
                                        onChange={(e)=>setEmail(e.target.value)}
                                    />
                                </Box>
                                <Button
                                    sx={{
                                        height: "45px",
                                        borderRadius: "24px"
                                    }}
                                    fullWidth variant="filled"
                                    onClick={() => handleGetEmail()}
                                >Next
                                </Button>
                                <Divider
                                    my="lg"
                                    label="or"
                                    labelPosition="center"
                                    opacity={0.60}
                                />
                                <AuthenticationButton content="Signup with Google" image={GoogleIcon} />
                                <AuthenticationButton content="Signup with facebook" image={facebookIcon} />

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