import express, { Request, Response } from 'express'
// import { userController } from '../../../Adaptor/userController'
// import { userRepository } from '../../../Applications/repository/userRepository'
// import { userInteractor } from '../../../Applications/interactor/userInteractor'


const router =  express.Router()

// const repository = new userRepository()
// const interactor = new userInteractor(repository)
// const controller = new userController(interactor)


// router.post("/signin",controller.createUser.bind(controller))
router.get("/",(req:Request,res:Response)=>{

        res.send("This is auth router")
})




export default router