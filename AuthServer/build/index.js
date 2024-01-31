"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
const config_1 = __importDefault(require("./config"));
const express_2 = __importDefault(require("./frameworks/webserver/express"));
const connection_1 = require("./frameworks/Database/connection");
const app = (0, express_1.default)();
const server = http_1.default.createServer(app);
const DataBase = (0, connection_1.Mongoose)();
DataBase();
express_2.default.expressConfig(app);
express_2.default.serverConfig(server, config_1.default);
//# sourceMappingURL=index.js.map