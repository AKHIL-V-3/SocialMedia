import nodeMailer from 'nodemailer'
// import { Otp } from '../Database/Models/userModel'


export const main = async (user:any)=>{


    const otp = generateOtp()
  
    let transporter = nodeMailer.createTransport({

        service: 'gmail',
        host: 'smtp.gmail.com',
        auth: {
          user: process.env.USER_EMAIL,
          pass: process.env.USER_PASS
        },
    })


    const mailOptions = {

          from: "social099media@gmail.com",
          to: user.email,
          subject: "sending email using node js",
          text: `YOUR OTP IS ${otp}`,
          
    }

    transporter.sendMail(mailOptions,(err:any,info:any)=>{
       
         if(err){

             console.log(err);
             
         }else{

              console.log('email send : ' + info.response);
              
         }
          
    })

    return otp

}


const generateOtp = ()=>{
      return `${Math.floor(1000 + Math.random() * 9000)}`
}

