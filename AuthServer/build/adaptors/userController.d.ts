import { Request, Response, NextFunction } from "express";
import { userInteractorInterface } from "../applications/interface/userInteractorInterface";
export declare class userController {
    private interactor;
    constructor(interactor: userInteractorInterface);
    createUser(req: Request, res: Response, next: NextFunction): Promise<void>;
    verifyOtp(req: Request, res: Response, next: NextFunction): Promise<void>;
}
