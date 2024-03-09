import { Avatar, Box, Button, Container, Divider, Input, PasswordInput, Progress, Stepper, Text, TextInput, Title } from "@mantine/core"
import { IconArrowLeft, IconChevronLeft, IconLock } from "@tabler/icons-react"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuthHook from "../../../hooks/useAuth";
import { useAppSelector } from "../../../lib/redux/hooks";
import { useForm } from "@mantine/form";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const OtpVerificationPage = () => {

    const navigate = useNavigate()
    const { verifyOtp } = useAuthHook()
    const [active, setActive] = useState(2);

    const notify = (message: string) => toast(message);
    const user = useAppSelector((state) => state.userSlice.user)
    const email = useAppSelector((state => state.userSlice.email))

    const handleSubmit = async (value: number | null) => {
        const data = {
            otp: value,
            email: email
        }
        try {
            const response: any = await verifyOtp(data)
            if (response.data.message === 'otpverification successful') {
                navigate('/auth/signup/step3')
            }

        } catch (err: any) {
            console.log(err);

            if (err.response.data.message === "otp is not valid") {
                notify('Otp is not valid')
            }
        }

    }

    const form = useForm({
        initialValues: { otp: null },
        // functions will be used to validate values at corresponding key   
        validate: {
            otp: (value: number) => {
                if (!value) return 'Otp required'
                let otp = value.toString()
                if (otp.length > 4) return 'Enter a valid otp'
                return null;
            },
        }
    });

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
                                gap: "30px",
                                width: "100%"
                            }}
                        >
                            {/* <Box sx={{ width: "100%" }} pb={20}>
                                <Stepper active={active} onStepClick={setActive}>
                                    <Stepper.Step />
                                    <Stepper.Step />
                                    <Stepper.Step />
                                </Stepper>
                            </Box> */}

                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "10px",
                                    width: "100%"
                                }}
                            >
                                <Box
                                    style={{
                                        width: "100%",
                                        marginBottom: "30px"
                                    }}
                                >
                                    <Progress radius="xl" size="xs" value={50} />
                                </Box>

                                {/* <Avatar sx={{ m: 1, bgcolor: "grey.3" }} radius={"xl"} color="indigo" variant="outline">
                                    <IconLock />
                                </Avatar> */}

                                 <Box
                                    sx={{
                                        display: "flex",
                                        justifyContent: "start",
                                        alignItems: "center",
                                        gap: "10px"
                                    }}
                                >

                                        <IconChevronLeft size={30} />

                                    <Box>
                                        <Text size="md"> Step 1 of 2</Text>
                                        <Text size="md" weight="bold" color="#fff">Verify your email</Text>
                                    </Box>

                                </Box>
                            </Box>


                            <Box

                                component='form'
                                onSubmit={form.onSubmit((value) => { handleSubmit(value.otp) })}
                                sx={{
                                    width: "100%",
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "20px"
                                }}
                            >
                                <Box
                                    sx={{ marginTop: "8px" }}
                                >
                                    <Text sx={{ fontSize: "16px", fontWeight: "bold", marginBottom: "3px" }}>Enter your Otp</Text>
                                    <TextInput
                                        type="number"
                                        sx={{ input: { padding: "20px" } }}
                                        size="lg"
                                        placeholder="Otp-eg ... 34543 "
                                        {...form.getInputProps('otp')}
                                    // onChange={(e:any) => setOtp(e.target.value)}
                                    />
                                </Box>
                                <Button
                                    sx={{
                                        height: "45px",
                                        borderRadius: "12px"
                                    }}
                                    fullWidth variant="outline"
                                    type="submit"
                                // onClick={handleSubmit}
                                >Verify Otp
                                </Button>

                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Container>
        </>
    )

}

export default OtpVerificationPage