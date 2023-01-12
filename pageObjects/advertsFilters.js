const selectors = {
    advertsFiltersTitle: 'h2',
    advertsKeywordInput: '.css-z344g > input',
    advertsKeywordLabel: '.css-z344g > label',
    advertsCategoryInput: 'form > :nth-child(2) > div > div > div',
    advertsCategoryLabel: '[data-testid="advertCategLabel"]',
    advertsCountryInput: 'form > :nth-child(3) > div > div > div',
    advertsCountryLabel: '[data-testid="advertCountryLabel"]',
    advertsBranchInput: 'form > :nth-child(4) > div > div > div',
    advertsBranchLabel: '[data-testid="advertBranchLabel"]',
    advertsCreatedByInput: 'form > :nth-child(5) > div > div > div',
    advertsCreatedByLabel: '[data-testid="advertCreatedbyLabel"]',
    advertsSearchButton: '.css-1x9d9hp',
    advertsClearButton: '.css-1a89o0e'
   
};

class AdvertsFilters {
 verifyIfAdvertsFiltersElementsAreDisplayed(){
     cy.get(selectors.advertsFiltersTitle).should('be.visible').contains('Adverts');
     cy.get(selectors.advertsKeywordInput).should('be.visible');
     cy.get(selectors.advertsKeywordLabel).should('be.visible').contains('Keyword');
     cy.get(selectors.advertsCategoryInput).should('be.visible');
     cy.get(selectors.advertsCategoryLabel).should('be.visible').contains('Category');
     cy.get(selectors.advertsCountryInput).should('be.visible');
     cy.get(selectors.advertsCountryLabel).should('be.visible').contains('Country');
     cy.get(selectors.advertsBranchInput).should('be.visible');
     cy.get(selectors.advertsBranchLabel).should('be.visible').contains('Branch');
     cy.get(selectors.advertsCreatedByInput).should('be.visible');
     cy.get(selectors.advertsCreatedByLabel).should('be.visible').contains('Created by');
     cy.get(selectors.advertsSearchButton).should('be.visible').contains('Search');
     cy.get(selectors.advertsClearButton).should('be.visible').contains('Clear');
 }
}

export default AdvertsFilters;
