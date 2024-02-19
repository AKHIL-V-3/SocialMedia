"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userController = void 0;
const Mail_1 = require("../frameworks/Mail");
class userController {
    constructor(interactor) {
        this.interactor = interactor;
    }
    async createUser(req, res, next) {
        try {
            const userData = {
                uid: req.body.uid,
                token: req.body.token
            };
            const data = await this.interactor.createUser(userData);
            const getotp = await (0, Mail_1.main)({ uid: req.body.uid, email: req.body.email });
            const otpData = {
                uid: req.body.uid,
                otp: getotp
            };
            const sendOtp = await this.interactor.createOtp(otpData);
            console.log(sendOtp);
            res.status(200).json(data);
        }
        catch (error) {
            next(error);
        }
    }
    async verifyOtp(req, res, next) {
        try {
            const { otp } = req.body;
            console.log(otp);
            const otpVerified = await this.interactor.verifyOtp({ otp: parseInt(otp) });
        }
        catch (err) {
            next(err);
        }
    }
}
exports.userController = userController;
//# sourceMappingURL=userController.js.map