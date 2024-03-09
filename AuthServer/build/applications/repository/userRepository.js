"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRepository = void 0;
const userModel_1 = require("../../frameworks/Database/Models/userModel");
// import rabbitMqConnection from "../../Frameworks/Rabbitmq";
class userRepository {
    async createUser(data) {
        try {
            const newUser = new userModel_1.User({
                uid: data.uid,
                token: data.token,
            });
            const response = await newUser.save();
            return response;
        }
        catch (err) {
            console.log(err);
        }
    }
    async createOtp(data) {
        try {
            const newOtp = new userModel_1.Otp({
                email: data.email,
                otp: data.otp
            });
            const response = await newOtp.save();
            return response;
        }
        catch (err) {
            console.log(err);
        }
    }
    async verifyOtp(data) {
        try {
            const response = await userModel_1.Otp.findOne({ email: data.email });
            if (response.otp === data.otp)
                return { ...response, message: "otpverification successful" };
            else
                return { message: "otp is not valid" };
        }
        catch (err) {
            console.log(err);
        }
    }
    async removeOtp(data) {
        try {
            const response = await userModel_1.Otp.deleteOne({ email: data.email });
            return response;
        }
        catch (err) {
            console.log(err);
        }
    }
}
exports.userRepository = userRepository;
//# sourceMappingURL=userRepository.js.map