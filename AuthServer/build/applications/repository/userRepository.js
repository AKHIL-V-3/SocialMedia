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
            console.log(response, 'jjjjjjjjjjjjjjjjjjjjjjjjjjjjj');
            return response;
        }
        catch (err) {
            console.log(err);
        }
    }
    async createOtp(data) {
        try {
            const newOtp = new userModel_1.Otp({
                uid: data.uid,
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
            const response = await userModel_1.Otp.findOne({ uid: data.uid });
            if (response.otp === data.otp)
                return response;
            else
                return { message: "otp is not valid" };
        }
        catch (err) {
            console.log(err);
        }
    }
    async removeOtp(uid) {
        try {
            const response = await userModel_1.Otp.deleteOne({ uid: uid });
            return response;
        }
        catch (err) {
            console.log(err);
        }
    }
}
exports.userRepository = userRepository;
//# sourceMappingURL=userRepository.js.map