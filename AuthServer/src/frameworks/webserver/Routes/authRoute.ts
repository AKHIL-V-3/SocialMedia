import express, { Request, Response } from 'express'
import { userController } from '../../../adaptors/userController'
import { userRepository } from '../../../applications/repository/userRepository'
import { userInteractor } from '../../../applications/interactor/userInteractor'


const router =  express.Router()

const repository = new userRepository()
const interactor = new userInteractor(repository)
const controller = new userController(interactor)

router.post("/signup",controller.createUser.bind(controller))






export default router