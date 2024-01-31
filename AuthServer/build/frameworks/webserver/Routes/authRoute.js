"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// import { userController } from '../../../Adaptor/userController'
// import { userRepository } from '../../../Applications/repository/userRepository'
// import { userInteractor } from '../../../Applications/interactor/userInteractor'
const router = express_1.default.Router();
// const repository = new userRepository()
// const interactor = new userInteractor(repository)
// const controller = new userController(interactor)
// router.post("/signin",controller.createUser.bind(controller))
router.get("/", (req, res) => {
    res.send("This is auth router");
});
exports.default = router;
//# sourceMappingURL=authRoute.js.map