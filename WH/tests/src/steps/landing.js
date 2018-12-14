import {landingPage} from "../pages/landing";


const { When, Given } = require('cucumber');


When(
    /^I click magnifier button$/,
    () => {
        landingPage.clickMagnifierButton();
    }
);

When(
    /^I search for "(.*)"$/,
    (searchText) => {
        landingPage.search(searchText);
    }

);
