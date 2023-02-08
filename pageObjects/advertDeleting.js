const selectors = {
    advertsDeleteModal: '[data-testid="advertsDeleteModal"]',
    advertsDeleteModalYesButton: '[data-testid="advertsDeleteModalYesButton"]',
    
};

class AdvertDeleting {
 verifyIfAdvertDeletingElementsAreDisplayed(){
    cy.get(selectors.advertsDeleteModal).should('be.visible');
    cy.get(selectors.advertsDeleteModalYesButton).should('be.visible').contains('Yes');
    
}
}

export default AdvertDeleting;