const selectors = {
    newsFiltersTitle: 'h2',
    newsFiltersBackground: '[data-testid="form"]',
    newsFiltersHeader: '[data-testid="newsFilters"]',
    newsKeywordLabel: '[data-testid="newsKeywordLabel"]',
    newsKeywordInput: '[data-testid="newsKeywordInput"]',
    newsCountryLabel: '[data-testid="newsCountryLabel"]',
    newsCountryInput: '[data-testid="newsCountryInput"]',
    newsLanguageLabel: '[data-testid="newsLanguageLabel"]',
    newsLanguageInput: '[data-testid="newsLanguageInput"]',
    newsSearchButton: '[data-testid="newsSearch"]',
    newsClearButton: '[data-testid="newsClear"]',
    foundPostTitle: '.css-j7qwjs > a > div > h2',
    foundPostTitle2: ':nth-child(2) > .css-1wi5m9r > .css-j7qwjs > a',
    newsCountryFrance: '[id="react-select-2-option-2"]',
    foundPostTitle3: '.css-j7qwjs > a',
    newslanguageFrench: '[id="react-select-3-listbox"]',
    foundPostTitle4: '.css-4b7u24 > .css-1wi5m9r > .css-j7qwjs > a'
};

class NewsFilters {
 verifyIfNewsFiltersElementsAreDisplayed(){
     cy.get(selectors.newsFiltersTitle).should('be.visible').contains('News');
     cy.get(selectors.newsFiltersBackground).should('be.visible');
     cy.get(selectors.newsFiltersHeader).should('be.visible').contains('Filters');
     cy.get(selectors.newsKeywordLabel).should('be.visible').contains('Keyword');
     cy.get(selectors.newsKeywordInput).should('be.visible');
     cy.get(selectors.newsCountryLabel).should('be.visible').contains('Country');
     cy.get(selectors.newsCountryInput).should('be.visible');
     cy.get(selectors.newsLanguageLabel).should('be.visible').contains('Language');
     cy.get(selectors.newsLanguageInput).should('be.visible');
     cy.get(selectors.newsSearchButton).should('be.visible');
     cy.get(selectors.newsClearButton).should('be.visible');
 }
}

class NewsSearching {
    verifyNewsSearching(){
        //filter by keyword
        cy.get(selectors.newsKeywordInput).type('auto');
        cy.get(selectors.newsSearchButton).click();
        cy.get(selectors.foundPostTitle).should('be.visible').contains('Post for automated testing');
        cy.get(selectors.foundPostTitle2).should('not.exist');
        //clear the filters
        cy.get(selectors.newsClearButton).click();
        cy.get(selectors.foundPostTitle2).should('be.visible').contains('Avatar test');
        //filter by country:
        cy.get(selectors.newsCountryInput).click();
        cy.get(selectors.newsCountryFrance).click();
        cy.get(selectors.newsSearchButton).click();
        cy.get(selectors.foundPostTitle3).should('be.visible').contains('News for France');
        //filter by language:
        cy.get(selectors.newsLanguageInput).click();
        cy.get(selectors.newslanguageFrench).click();
        cy.get(selectors.newsSearchButton).click();
        cy.get(selectors.foundPostTitle).should('be.visible').contains('French1 for France');

    }
}
export default {NewsFilters, NewsSearching};


