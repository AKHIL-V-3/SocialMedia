"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const body_parser_1 = __importDefault(require("body-parser"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const cors_1 = __importDefault(require("cors"));
const authRoute_1 = __importDefault(require("./Routes/authRoute"));
const morgan_1 = __importDefault(require("morgan"));
function expressConfig(app) {
    app.use(body_parser_1.default.json());
    app.use((0, cookie_parser_1.default)());
    app.use((0, cors_1.default)({
        credentials: true
    }));
    app.use((0, morgan_1.default)("dev"));
    app.use(body_parser_1.default.urlencoded({
        limit: "50mb",
        extended: true,
        parameterLimit: 50000,
    }));
    app.use("/auth", authRoute_1.default);
}
function serverConfig(server, getConfigs) {
    const config = getConfigs();
    server.listen(config.server.port, () => {
        console.log(`${config.server.name} server started on ${config.server.port}`);
    });
}
const express = {
    expressConfig,
    serverConfig
};
exports.default = express;
//# sourceMappingURL=express.js.map