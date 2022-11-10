const selectors = {
    newsFiltersTitle: 'h2',
    newsFiltersBackground: '[data-testid="form"]',
    newsFiltersHeader: '[data-testid="newsFilters"]',
    //newsKeywordLabel: '[data-testid="newsKeywordLabel"]',
    newsKeywordInput: '[data-testid="newsKeywordInput"]',
    newsCountryLabel: '[data-testid="newsCountryLabel"]',
    newsCountryInput: ':nth-child(3) > div > div > .css-7x52o8-control',
    newsLanguageLabel: '[data-testid="newsLanguageLabel"]',
    newsLanguageInput: 'div.css-j7qwjs > div > form > div:nth-child(4) > div > div > div',
    newsSearchButton: '[data-testid="newsSearch"]',
    newsClearButton: '[data-testid="newsClear"]'
   
};

class newsFilters {
 verifyIfNewsFiltersElementsAreDisplayed(){
     cy.get(selectors.newsFiltersTitle).should('be.visible').contains('News');
     cy.get(selectors.newsFiltersBackground).should('be.visible');
     cy.get(selectors.newsFiltersHeader).should('be.visible').contains('Filters');
     //cy.get(selectors.newsKeywordLabel).should('be.visible').contains('Label');
     cy.get(selectors.newsKeywordInput).should('be.visible');
     cy.get(selectors.newsCountryLabel).should('be.visible').contains('Country');
     cy.get(selectors.newsCountryInput).should('be.visible');
     cy.get(selectors.newsLanguageLabel).should('be.visible').contains('Language');
     cy.get(selectors.newsLanguageInput).should('be.visible');
     cy.get(selectors.newsSearchButton).should('be.visible');
     cy.get(selectors.newsClearButton).should('be.visible');
 }
}

export default newsFilters;