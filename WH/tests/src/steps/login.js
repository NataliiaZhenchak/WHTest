import {loginPage} from "../pages/login";

const { When, Then } = require('cucumber');


Then(
    /^I can see full login window$/,
    () => {
        loginPage.verifyLoginWindowDisplayed();
    }
);
