const selectors = {
    addNewAdvertButton: '.css-eat38v > button',
    advertTitle: '[data-testid="advertTitle"]',
    advertImage: '[data-testid="advertImage"]'
   
};

class AdvertsCenter {
 verifyIfAdvertsCenterElementsAreDisplayed(){
     cy.get(selectors.addNewAdvertButton).should('be.visible').contains('Add new advert');
     cy.get(selectors.advertTitle).should('be.visible');
     cy.get(selectors.advertImage).should('be.visible');
 } 
 } 
 

export default AdvertsCenter;