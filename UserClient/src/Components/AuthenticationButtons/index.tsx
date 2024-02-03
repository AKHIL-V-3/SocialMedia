import React from "react";
import { Button, rem } from "@mantine/core"


interface ChildProps {
    content: string;
    image:string;
  }
  

const  AuthenticationButton:React.FC<ChildProps> = ({content,image})=> {

    const buttonStyle = {
        root: {
            paddingTop: rem(25),
            paddingBottom: rem(25),
        },
        inner: {
            height: "30px",
            
        },
    };

    const sx = {
        width: "100%",
        display: "flex",
        gap: "10px",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "24px",
        img: {
            width: "30px" ,// Ensure the image doesn't exceed its container's width
          },
    };

    return (

        <Button
            styles={buttonStyle}
            sx={sx}
            fullWidth
            variant="outline"
            leftIcon={<img src={image} alt="Google Icon" />}
        >{content}
        </Button>
    )
}

export default AuthenticationButton