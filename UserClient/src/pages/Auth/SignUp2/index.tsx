import { Avatar, Box, Button, Container, Divider, PasswordInput, Stepper, Text, Step, TextInput, Title, Progress } from "@mantine/core"
import { IconArrowElbowLeft, IconArrowLeft, IconArrowLeftBar, IconArrowLeftCircle, IconArrowLeftSquare, IconArrowNarrowLeft, IconChevronLeft, IconLock, IconUserCheck } from "@tabler/icons-react"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../../../lib/redux/hooks";
import { userActions } from "../../../lib/redux/Slice/UserSlice";
import useAuthHook from "../../../hooks/useAuth";
import { useForm } from "@mantine/form";
import { ArrowLeftIcon, ChevronLeftIcon } from "@radix-ui/react-icons";



const SignUpPage2 = () => {

    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const { signupWithEmail } = useAuthHook()
    const email = useAppSelector((state) => state.userSlice.email)

    const handleSubmit = async (values: { password1: string, password2: string }) => {
        const response = await signupWithEmail(email, values.password1, values.password2)
        const user = {
            uid: response?.data?.uid,
            token: response?.data?.token
        }
        dispatch(userActions.addUser(user))
        if (response) {
            navigate("/")
        }
    }

    const form = useForm({
        initialValues: { password1: '', password2: '' },
        // functions will be used to validate values at corresponding key   
        validate: {
            password1: (value: string) => {
                if (value.length < 1) return 'Enter your password'
                if (value.length < 6) return 'Password should be atlease 6 characters'
                return null;
            },
            password2: (value: string) => {
                if (value.length < 1 && form.values.password1.length >= 1) return 'Confirm your Password'
                if (value.length < 1) return 'Enter your password'
                if (value.length < 6) return 'Password should be atlease 6 characters'
                if (value !== form.values.password1) return 'Passwords do not match'
                return null;
            },
        }
    });
    const [active, setActive] = useState(1);
    const nextStep = () => setActive((current) => (current < 3 ? current + 1 : current));
    const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));

    const steps = ['Step 1', 'Step 2', 'Step 3', 'Step 4'];


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
                                gap: "30px",
                                width: "100%"
                            }}
                        >

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
                                    <Progress radius="xl" size="xs" value={100} />
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
                                        <Text size="md"> Step 2 of 2</Text>
                                        <Text size="md" weight="bold" color="#fff">Create a password</Text>
                                    </Box>
                                </Box>
                            </Box>


                            <Box
                                component="form"
                                onSubmit={form.onSubmit((values) => handleSubmit(values))}
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
                                        {...form.getInputProps('password1')}
                                    // onChange={(e) => setPassword(e.target.value)}
                                    />

                                </Box>
                                <Box>
                                    <Text sx={{ fontSize: "16px", fontWeight: "bold", marginBottom: "3px" }}>Confirm Password</Text>
                                    <PasswordInput
                                        sx={{ input: { padding: "20px" } }}
                                        size="lg"
                                        {...form.getInputProps('password2')}
                                    // onChange={(e) => setConfirmpassword(e.target.value)}
                                    />
                                </Box>
                                <Button
                                    sx={{
                                        height: "45px",
                                        borderRadius: "24px"
                                    }}
                                    fullWidth variant="filled"
                                    // onClick={() => handleSubmit()}
                                    type="submit"
                                >Signup
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