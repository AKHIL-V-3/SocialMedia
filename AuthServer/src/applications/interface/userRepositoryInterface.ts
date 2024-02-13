import { otpEntity, userEntity } from "../../entities/userEntity"

export interface userRepositoryInterface {
       createUser(data:userEntity): Promise <userEntity>
       createOtp(data:otpEntity): Promise <otpEntity>
       verifyOtp(data:otpEntity): Promise <otpEntity>
}
