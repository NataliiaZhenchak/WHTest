import Page from './page';

class LandingPage extends Page {

    get magnifierBtn()  { return $('.btn-search-magnifier'); }
    get searchField()  { return $('[data-test="game-search-field"]'); }

    clickMagnifierButton(){
        this.magnifierBtn.click();
    }

    search(searchText){
        this.searchField.addValue(searchText);
    }

}

export const landingPage = new LandingPage();
