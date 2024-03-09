import { userEntity, otpEntity } from "../../entities/userEntity";
import { userRepositoryInterface } from "../interface/userRepositoryInterface";
export declare class userRepository implements userRepositoryInterface {
    createUser(data: userEntity): Promise<any>;
    createOtp(data: otpEntity): Promise<any>;
    verifyOtp(data: otpEntity): Promise<any>;
    removeOtp(data: otpEntity): Promise<any>;
}
