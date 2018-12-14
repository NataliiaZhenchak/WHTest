import {landingPage} from "../pages/landing";

const { Given } = require('cucumber');


Given(
    /^I open the url "(.*)"$/,
    (url) => {
        landingPage.openUrl(url);
        browser.windowHandleMaximize();
    }
);
