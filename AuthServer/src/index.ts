import express from "express"
import http from "http"
import getConfig from './config';
import Server from './frameworks/webserver/express'
import { Mongoose } from "./frameworks/Database/connection"


const app = express()
const server = http.createServer(app)
const DataBase = Mongoose()
DataBase()
Server.expressConfig(app)
Server.serverConfig(server,getConfig)
