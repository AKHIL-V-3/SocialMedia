"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userInteractor = void 0;
class userInteractor {
    constructor(repository) {
        this.repository = repository;
    }
    async createUser(input) {
        return this.repository.createUser(input);
    }
    async createOtp(input) {
        return this.repository.createOtp(input);
    }
    async verifyOtp(input) {
        return this.repository.verifyOtp(input);
    }
    async removeOtp(input) {
        return this.repository.removeOtp(input);
    }
}
exports.userInteractor = userInteractor;
//# sourceMappingURL=userInteractor.js.map