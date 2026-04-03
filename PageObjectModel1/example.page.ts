class Example{
    usernameTF:string;
    passwordTF:string;
    SubmitBtn:any
   
    constructor(page){
        this.usernameTF=page.locator('//ipput[@id="username"]')
        this.passwordTF=page.locator('//input[@id="password"]')
        this.SubmitBtn=page.locator('//button[@id="submit"]')
    }
}

export default Example