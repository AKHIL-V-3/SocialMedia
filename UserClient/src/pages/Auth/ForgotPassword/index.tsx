
import {  Button, Box, TextInput, Text } from '@mantine/core';
import React from 'react';
import useAuthHook from '../../../hooks/useAuth';
import { toast } from 'react-toastify';
import { useForm } from '@mantine/form';



interface ModalProps {
    onClose: () => void;
  }


export const Email: React.FC<ModalProps>= ( {onClose} ) => {

 
    const { checkEmaiexist, createNewPassword } = useAuthHook()
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

    const handleSubmit = async (values: { email: string }) => {
             
        try{
            const response = await checkEmaiexist(values.email)
   
        if (response && response.length > 0) {
              const response= await createNewPassword(values.email)
              if(response){
                    notify("check your email to create a new password")
                    onClose()
              }
        } else {
            notify("User not found ! please signup")
        }
        }catch(err){
           console.log(err);
           notify("An error occurred. Please try again later.");
        }  
    }

    return (

        <>
            <Box>

            {/* <LoadingOverlay visible={visible} zIndex={1000} /> */}

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
                    >Continue
                    </Button>
                </Box>

            </Box>
        </>
    )
}
