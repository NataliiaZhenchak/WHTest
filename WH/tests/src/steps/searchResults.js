import {searchResultsPage} from "../pages/searchResults";

const { When } = require('cucumber');


When(
    /^I open tile details for "(.*)"$/,
    (gameName) => {
        searchResultsPage.hoverMouseOverTile(gameName);
        searchResultsPage.clickMore(gameName);
    }
);


When(
    /^I click Play Now button$/,
    () => {
        searchResultsPage.clickPlayNow();
    }
);
