export class User{
    constructor(private userData: any) {
    
    }

    get userToken() {
        return this.userData.token;
    }
}