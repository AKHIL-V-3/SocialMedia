import { userInteractorInterface } from "../interface/userInteractorInterface";
import { userRepositoryInterface } from "../interface/userRepositoryInterface";
export declare class userInteractor implements userInteractorInterface {
    private repository;
    constructor(repository: userRepositoryInterface);
    createUser(input: any): Promise<import("../../entities/userEntity").userEntity>;
    createOtp(input: any): Promise<import("../../entities/userEntity").otpEntity>;
    verifyOtp(input: any): Promise<import("../../entities/userEntity").otpEntity>;
}
