import Page from './page'

class LoginPage extends Page {

    userNameInput(){return browser.$('#login-form-username'); }
    passwordInput() {return browser.$('#login-form-password');}
    loginComponent() {return browser.$('.login-component__wrapper');}

    constructor(){
        super();
    }

    verifyLoginWindowDisplayed(){
        this.userNameInput().waitForVisible();
        expect(this.userNameInput().isVisible()).to.equal(true, `Element ${this.userNameInput().selector} was not displayed.`);
        expect(this.passwordInput().isVisible()).to.equal(true, `Element ${this.passwordInput().selector} was not displayed.`);
        expect(this.loginComponent().isVisible()).to.equal(true, `Element ${this.loginComponent().selector} was not displayed.`);
    }
}

export const loginPage = new LoginPage();



