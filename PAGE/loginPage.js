export class LoginPage {
    constructor(page) {
        this.page = page;
        this.username = '#user-name';
        this.password = '#password';
        this.loginBtn = '#login-button';
    }

    async goto(){
        await this.page.goto('https://www.saucedemo.com/');
    }
    async login(user,pass){
        await this.page.locator(this.username).fill(user);
        await this.page.locator(this.password).fill(pass);
        await this.page.click(this.loginBtn);
    }
}