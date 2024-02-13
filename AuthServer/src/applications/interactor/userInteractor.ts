import { userInteractorInterface } from "../interface/userInteractorInterface";
import { userRepositoryInterface } from "../interface/userRepositoryInterface";


export class userInteractor implements userInteractorInterface{

    private  repository:userRepositoryInterface

    constructor(repository:userRepositoryInterface){
            this.repository = repository
    }
   
   async createUser(input: any) {  
       return this.repository.createUser(input)    
    }

    async createOtp(input:any) {
         return this.repository.createOtp(input)
    }
    async verifyOtp(input:any) {
         return this.repository.verifyOtp(input)
    }

       
}