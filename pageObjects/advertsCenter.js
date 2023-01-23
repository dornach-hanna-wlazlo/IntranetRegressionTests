const selectors = {
    addNewAdvertButton: '.css-eat38v > button',
    advertTitle: '.css-16j8xl6 > h2',
    advertImage: '.css-n8fofg'
   
};

class AdvertsCenter {
 verifyIfAdvertsCenterElementsAreDisplayed(){
     cy.get(selectors.addNewAdvertButton).should('be.visible').contains('Add new advert');
     cy.get(selectors.advertTitle).should('be.visible');
     cy.get(selectors.advertImage).should('be.visible');
 } 
 } 
 

export default AdvertsCenter;