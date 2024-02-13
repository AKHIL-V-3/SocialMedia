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
            const sendMail = await (0, Mail_1.main)({ uid: req.body.uid, email: req.body.email });
            console.log(sendMail);
            res.status(200).json(data);
        }
        catch (error) {
            next(error);
        }
    }
    async sendMail(req, res, next) {
        try {
        }
        catch (err) {
            next(err);
        }
    }
}
exports.userController = userController;
//# sourceMappingURL=userController.js.map