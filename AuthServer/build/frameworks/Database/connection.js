"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mongoose = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const config_1 = __importDefault(require("../../config"));
function Mongoose() {
    const config = (0, config_1.default)();
    const mongoURI = config.database.url;
    const Connections = {
        autoIndex: false,
        connectTimeoutMS: 1000,
    };
    return () => {
        mongoose_1.default.connect(mongoURI, Connections)
            .then(() => {
            console.log('Connected to MongoDB');
        })
            .catch(error => {
            console.error('Error connecting to MongoDB:', error);
        });
    };
}
exports.Mongoose = Mongoose;
//# sourceMappingURL=connection.js.map