"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
function getConfigs() {
    return {
        server: {
            name: "Authentication",
            port: process.env.SERVER_PORT || 5001,
            baseURl: "/",
            serverId: "1",
            appBaseUrl: "/auth",
            adminBaseUrl: "/auth/su",
        },
        database: {
            url: process.env.DATABASE_URL
        }
    };
}
exports.default = getConfigs;
//# sourceMappingURL=config.js.map