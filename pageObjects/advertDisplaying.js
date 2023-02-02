const selectors = {
    advertTitle: 'h2',
    advertPrice: '[data-testid="advertPrice"]',
    advertCategory: '[data-testid="advertCategory"]',
    advertPublishedOn: '[data-testid="advertPublishedOn"]',
    advertExpires: '[data-testid="advertExpires"]',
    advertCountry: '[data-testid="advertCountry"]',
    advertBranch: '[data-testid="advertBranch"]',
    advertAuthor: '[data-testid="advertAuthor"]',
    advertDescription: '[data-testid="advertDescription"]',
    otherAdvertsTitle: '[data-testid="otherAdvertsTitle"]',
    oneOfOtherAdverts: '[data-testid="oneOfOtherAdverts"]'
};

class AdvertDisplaying {
 verifyIfAdvertIsDisplayedCorrectly(){
     cy.get(selectors.advertTitle).should('be.visible');
     cy.get(selectors.advertPrice).should('be.visible').contains('Price');
     cy.get(selectors.advertCategory).should('be.visible').contains('Category');
     cy.get(selectors.advertPublishedOn).should('be.visible').contains('Published on');
     cy.get(selectors.advertExpires).should('be.visible').contains('Expires');
     cy.get(selectors.advertCountry).should('be.visible').contains('Country');
     cy.get(selectors.advertBranch).should('be.visible').contains('Branch');
     cy.get(selectors.advertAuthor).should('be.visible');
     cy.get(selectors.advertDescription).should('be.visible').contains('Description');
     cy.get(selectors.otherAdvertsTitle).should('be.visible').contains('Other adverts');
     cy.get(selectors.oneOfOtherAdverts).should('be.visible').its('length').should('eq', 3);  
 } 
 } 
export default AdvertDisplaying;