const selectors = {
    advertTitle: 'h2',
    advertPrice: '.css-15gdg9s > p',
    advertCategory: '.css-rn3llk > :nth-child(2) > div > p',
    advertPublishedOn: 'div:nth-child(3) > div:nth-child(1) > p',
    advertExpires: ':nth-child(3) > :nth-child(2) > p',
    advertCountry: '.css-sda4yz > :nth-child(1) > p',
    advertBranch: '.css-sda4yz > :nth-child(2) > p',
    advertAuthor: '.css-1yg9k88 > .css-70qvj9',
    advertDescription: '.css-1q304az > h2',
    otherAdvertsTitle: '.css-rltemf > h2',
    oneOfOtherAdverts: '.css-rltemf > div > a'
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