"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.main = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
const main = async (user) => {
    console.log(user, '00000000000000000');
    let transporter = nodemailer_1.default.createTransport({
        service: 'gmail',
        host: 'smtp.gmail.com',
        auth: {
            user: process.env.USER_EMAIL,
            pass: process.env.USER_PASS
        },
    });
    const mailOptions = {
        from: "social099media@gmail.com",
        to: user,
        subject: "sending email using node js",
        text: "this is easy",
    };
    transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
            console.log(err);
        }
        else {
            console.log('email send : ' + info.response);
        }
    });
};
exports.main = main;
//# sourceMappingURL=index.js.map