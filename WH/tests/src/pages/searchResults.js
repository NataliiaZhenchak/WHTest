import Page from './page'

export class SearchResultsPage extends Page {

    playNowBtn(){return browser.$('[data-test="tile-details-button-play"]'); }
    gameTile(gameName) {return browser.$(`//img[@alt="${gameName}"]/ancestor::div[starts-with(@class, 'gc-tile')]`);}
    gameTileMoreBtn(gameName) {return browser.$(`//img[@alt="${gameName}"]/ancestor::div[starts-with(@class, 'gc-tile') ]/descendant::button[@data-test="tile-menu-button-more"]`)}


    constructor(){
        super();
    }

    hoverMouseOverTile(gameName) {
        this.gameTile(gameName).waitForVisible();
        this.gameTile(gameName).moveToObject();
    }

    clickMore(gameName) {
        this.gameTileMoreBtn(gameName).waitForVisible();
        this.gameTileMoreBtn(gameName).click();
    }

    clickPlayNow(){
        //browser.pause(2000);
        this.playNowBtn().waitForVisible();
        this.playNowBtn().click();
    }

}

export const searchResultsPage = new SearchResultsPage();



