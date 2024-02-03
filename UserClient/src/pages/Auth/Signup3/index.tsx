import { Avatar, Box, Button, Container, Divider, Input, PasswordInput, Stepper, Text, TextInput, Title } from "@mantine/core"
import { IconArrowLeft } from "@tabler/icons-react"
import { useState } from "react";
import { useNavigate } from "react-router-dom";




const SignUpPage3 = () => {

    const navigate = useNavigate()

    const [active, setActive] = useState(2);

    const nextStep = () => setActive((current) => (current < 3 ? current + 1 : current));
    const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));

    const handleSubmit = () => {
        navigate('/');
        nextStep
      }


      const handleprev = () => {
        navigate('/auth/signup/step2');
        prevStep
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
                                alignItems: "start",
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

                            <Box
                                sx={{
                                    display: "flex",
                                    gap: "10px",
                                    alignItems: 'center'
                                }}
                            >
                                <Avatar onClick={()=>handleprev()} sx={{ m: 1, bgcolor: "grey.3" }} radius={"xl"} color="indigo" variant="outline">
                                    <IconArrowLeft />
                                </Avatar>

                                <Text sx={{ fontSize: "20px", fontWeight: "bold", marginBottom: "3px" }}>Create a Password</Text>
                            </Box>


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
                                    <Text sx={{ fontSize: "16px", fontWeight: "bold", marginBottom: "3px" }}>Enter your Otp</Text>
                                    <TextInput
                                        sx={{ input: { padding: "20px" } }}
                                        size="lg"
                                        placeholder="Otp-eg ... 34543 "
                                    />
                                </Box>
                                <Button
                                    sx={{
                                        height: "45px",
                                        borderRadius: "12px"
                                    }}
                                    fullWidth variant="outline"
                                    onClick={(nextStep)}
                                >Complete Login
                                </Button>

                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Container>
        </>
    )

}

export default SignUpPage3