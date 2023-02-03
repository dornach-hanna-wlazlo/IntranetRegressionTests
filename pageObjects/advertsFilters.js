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
    advertsClearButton: '[data-testid="advertsClearButton"]',
    advertTitle: '[data-testid="advertTitle"]',
   
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

class AdvertsSearching {
    verifyAdvertsSearching(){
        //filter by Keyword
        cy.get(selectors.advertsKeywordInput).type('embedded');
        cy.get(selectors.advertsSearchButton).click();
        cy.get(selectors.advertTitle).should('be.visible').contains('video');
        //clear the filters
        cy.get(selectors.advertsClearButton).click();
        cy.wait(5000).get(selectors.advertTitle).should('be.visible').contains('Admin advert');
        //filter by Category
        //filter by Country
        //filter by Branch
        //filter by Created by
        cy.get(selectors.advertsCreatedByInput).click();
        cy.get('[id="react-select-7-option-0"]').click();
        cy.get(selectors.advertsSearchButton).click();
        cy.get(selectors.advertTitle).should('be.visible').contains('Zaneta advert');
    }
}


export default {AdvertsFilters, AdvertsSearching};
