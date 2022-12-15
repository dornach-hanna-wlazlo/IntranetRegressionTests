const selectors = {
    footerSpace: '[data-testid="footerSpace"]',
    footerZiegler:'[data-testid="footerZiegler"]',
    footerPrivacy: '[data-testid="footerPrivacy"]',
    footerTos: '[data-testid="footerTos"]',
    footerFeedback: '[data-testid="footerFeedback"]'  
};

class Footer {
 verifyIfFooterElementsAreDisplayed(){
    cy.get(selectors.footerSpace).should('be.visible');
    cy.get(selectors.footerZiegler).should('be.visible').contains('Ziegler Group ©');
    cy.get(selectors.footerPrivacy).should('be.visible').contains('Privacy policy');
    cy.get(selectors.footerTos).should('be.visible').contains('Terms of use');
    cy.get(selectors.footerFeedback).should('be.visible').contains('Feedback'); 
}
}

export default Footer;