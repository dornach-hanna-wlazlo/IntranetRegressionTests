const selectors = {
    advertsFiltersTitle: 'h2',
    advertsKeywordInput: '[data-testid="advertsKeywordInput"]',
    advertsKeywordLabel: '[data-testid="advertsKeywordLabel"]',
    advertsCategoryInput: '[data-testid="advertsCategoryInput"]',
    advertsCategoryLabel: '[data-testid="advertCategLabel"]',
    advertsCountryInput: '[data-testid="advertCountryInput"]',
    advertsCountryLabel: '[data-testid="advertCountryLabel"]',
    advertsBranchInput: '[data-testid="advertBranchInput"]',
    advertsBranchLabel: '[data-testid="advertBranchLabel"]',
    advertsCreatedByInput: '[data-testid="advertCreatedbyInput"]',
    advertsCreatedByLabel: '[data-testid="advertCreatedbyLabel"]',
    advertsSearchButton: '[data-testid="advertsSearchButton"]',
    advertsClearButton: '[data-testid="advertsClearButton"]'
   
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
