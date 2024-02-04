import { Box, Divider, Button, Container, Text, TextInput, Title, Avatar, PasswordInput } from "@mantine/core"
import AuthenticationButton from "../../../Components/AuthenticationButtons"
import { IconLock } from "@tabler/icons-react"
import GoogleIcon from "../../../assets/google-logo.png"
import facebookIcon from "../../../assets/facebook-logo0.png"
import { Link } from "react-router-dom"


const SignInPage = () => {

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

                                <AuthenticationButton content="Signup with Google" image={GoogleIcon} />
                                <AuthenticationButton content="Signup with facebook" image={facebookIcon} />

                                <Divider
                                    size="xs"
                                    labelPosition="center"
                                    mt={20}
                                    mb={10}
                                    opacity={0.60}
                                />


                                <Box
                                    sx={{ marginTop: "8px" }}
                                >
                                    <Text sx={{ fontSize: "16px", fontWeight: "bold", marginBottom: "3px" }}>Email Address</Text>
                                    <TextInput

                                        style={{ outline: "none", border: "none", boxShadow: "none" }}
                                        sx={{ input: { padding: "20px" }, }}
                                        size="lg"
                                        placeholder="name@domain.com"

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
                                    />

                                </Box>
                                <Button
                                    mt={20}
                                    sx={{
                                        height: "45px",
                                        borderRadius: "24px"
                                    }}
                                    fullWidth variant="filled"
                                >SignIn
                                </Button>

                                <div style={{ display: "flex", justifyContent: "center", width: "100%" }}><Text><a href="">Forgot Your Password</a></Text></div>

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