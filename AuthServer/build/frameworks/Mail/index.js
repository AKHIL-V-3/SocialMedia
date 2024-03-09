"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.main = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
// import { Otp } from '../Database/Models/userModel'
const main = async (user) => {
    const otp = generateOtp();
    let transporter = nodemailer_1.default.createTransport({
        service: 'gmail',
        host: 'smtp.gmail.com',
        auth: {
            user: process.env.USER_EMAIL,
            pass: process.env.USER_PASS
        },
    });
    const mailOptions = {
        from: "akhilv018@gmail.com",
        to: user.email,
        subject: "sending email using node js",
        text: `YOUR OTP IS ${otp}`,
    };
    transporter.sendMail(mailOptions, (err, info) => {
        if (err)
            console.log(err);
        else
            console.log('email send : ' + info.response);
    });
    console.log(otp);
    return otp;
};
exports.main = main;
const generateOtp = () => {
    return `${Math.floor(1000 + Math.random() * 9000)}`;
};
//# sourceMappingURL=index.js.map