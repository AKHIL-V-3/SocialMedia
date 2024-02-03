import { Avatar, Box, Button, Container, Divider, PasswordInput, Stepper, Text, TextInput, Title } from "@mantine/core"
import { IconArrowLeft } from "@tabler/icons-react"
import { useState } from "react";
import { useNavigate } from "react-router-dom";




const SignUpPage2 = () => {

    const navigate = useNavigate()

    const [active, setActive] = useState(1);

    const nextStep = () => setActive((current) => (current < 3 ? current + 1 : current));
    const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));

    const handleNext = () => {
        navigate('/auth/signup/step3');
        nextStep
    }


    const handleprev = () => {
        navigate('/auth/signup');
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
                                    gap: "13px",
                                    alignItems: 'center'
                                }}
                            >
                                <Avatar onClick={() => handleprev()} sx={{ m: 1, bgcolor: "grey.3" }} radius={"xl"} color="indigo" variant="outline">
                                    <IconArrowLeft />
                                </Avatar>

                                <Text sx={{ fontSize: "20px", fontWeight: "bold", marginBottom: "3px" }}>Create a Password</Text>
                            </Box>


                            <Box
                                sx={{
                                    width: "100%",
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "18px"
                                }}
                            >
                                <Box
                                // sx={{ marginTop: "8px" }}
                                >
                                    <Text sx={{ fontSize: "16px", fontWeight: "bold", marginBottom: "3px" }}>Password</Text>
                                    <PasswordInput
                                        sx={{ input: { padding: "20px" } }}
                                        size="lg"
                                    />

                                </Box>
                                <Box>
                                    <Text sx={{ fontSize: "16px", fontWeight: "bold", marginBottom: "3px" }}>Confirm Password</Text>
                                    <PasswordInput
                                        sx={{ input: { padding: "20px" } }}
                                        size="lg"
                                    />

                                </Box>



                                <Button
                                    sx={{
                                        height: "45px",
                                        borderRadius: "24px"
                                    }}
                                    fullWidth variant="filled"
                                    onClick={() => handleNext()}
                                >Next
                                </Button>

                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Container>
        </>
    )

}

export default SignUpPage2