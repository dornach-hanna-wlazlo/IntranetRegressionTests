const selectors = {
    advertsDeleteModal: '[data-testid="advertsDeleteModal"]',
    advertsDeleteModalYesButton: '[data-testid="advertsDeleteModalYesButton"]',
    advertsDeleteModalNoButton: '[data-testid="advertsDeleteModalNoButton"]',
    
};

class AdvertDeleting {
 verifyIfAdvertDeletingElementsAreDisplayed(){
    cy.get(selectors.advertsDeleteModal).should('be.visible');
    cy.get(selectors.advertsDeleteModalYesButton).should('be.visible').contains('Yes');
    cy.get(selectors.advertsDeleteModalNoButton).should('be.visible').contains('No');
    
}
}

export default AdvertDeleting;