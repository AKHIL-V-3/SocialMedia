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
            res.status(200).json(data);
        }
        catch (error) {
            next(error);
        }
    }
    async sendOtp(req, res, next) {
        try {
            const { email } = req.body;
            const getotp = await (0, Mail_1.main)({ email: email });
            const otpData = {
                email: req.body.email,
                otp: getotp
            };
            const storedOtp = await this.interactor.createOtp(otpData);
            res.status(200).json(storedOtp);
        }
        catch (err) {
            next(err);
        }
    }
    async verifyOtp(req, res, next) {
        try {
            const { otp, email } = req.body;
            const otpdata = { otp: parseInt(otp), email };
            const otpVerified = await this.interactor.verifyOtp(otpdata);
            if (otpVerified.message === "otpverification successful") {
                const otpRemoved = await this.interactor.removeOtp(otpdata);
                res.status(200).json({ message: otpVerified.message });
            }
            else {
                res.status(500).json({ message: otpVerified.message });
            }
        }
        catch (err) {
            next(err);
        }
    }
}
exports.userController = userController;
//# sourceMappingURL=userController.js.map