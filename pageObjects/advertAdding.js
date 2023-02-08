const selectors = {
    advertsEditModalTitle: '[data-testid="advertsEditModalTitle"]',
    advertsEditModalTitleLabel: '[data-testid="advertsEditModalTitleLabel"]',
    advertsEditModalTitleInput: '[data-testid="advertsEditModalTitleInput"]',
    advertsEditModalCategoryInput: '[data-testid="advertsEditModalCategoryInput"]',
    advertsEditModalCategoryLabel: '[data-testid="advertsEditModalCategoryLabel"]',
    advertsEditModalExpiresLabel: '[data-testid="advertsEditModalExpiresLabel"]',
    advertsEditModalExpiresInput: '[data-testid="advertsEditModalExpiresInput"]',
    advertsEditModalPriceInput: '[data-testid="advertsEditModalPriceInput"]',
    advertsEditModalPriceLabel: '[data-testid="advertsEditModalPriceLabel"]',
    advertsEditModalCurrencyInput: '[data-testid="advertsEditModalCurrencyInput"]',
    advertsEditModalCurrencyLabel: '[data-testid="advertsEditModalCurrencyLabel"]',
    advertsEditModalNegociateLabel: '[data-testid="advertsEditModalNegociateLabel"]',
    advertsEditModalCountryInput: '[data-testid="advertsEditModalCountryInput"]',
    advertsEditModalCountryLabel: '[data-testid="advertsEditModalCountryLabel"]',
    advertsEditModalBranchInput: '[data-testid="advertsEditModalBranchInput"]',
    advertsEditModalBranchLabel: '[data-testid="advertsEditModalBranchLabel"]',
    advertsEditModalDescriptionLabel: '[data-testid="advertsEditModalDescriptionLabel"]',
    advertsEditModalDescriptionInput: '[data-testid="advertsEditModalDescriptionInput"]',
    advertsEditModalPhotoLabel: '[data-testid="advertsEditModalPhotoLabel"]',
    advertsEditModalPhotoUploadInput: '[data-testid="advertsEditModalPhotoUploadInput"]',
    advertsEditModalCancelButton: '[data-testid="advertsEditModalCancelButton"]',
    advertsEditModalSaveButton: '[data-testid="advertsEditModalSaveButton"]'    
};

class advertAdding {
 verifyAdvertAddingFormElements(){
    //cy.get(selectors.advertsEditModalTitle).should('be.visible').contains('Add new advert'); 
    cy.get(selectors.advertsEditModalTitleLabel).should('be.visible').contains('Title'); 
    cy.get(selectors.advertsEditModalTitleInput).should('be.visible'); 
    cy.get(selectors.advertsEditModalCategoryInput).should('be.visible'); 
    cy.get(selectors.advertsEditModalCategoryLabel).should('be.visible').contains('Category'); 
    cy.get(selectors.advertsEditModalExpiresLabel).should('be.visible').contains('Expires'); 
    cy.get(selectors.advertsEditModalExpiresInput).should('be.visible'); 
    cy.get(selectors.advertsEditModalPriceInput).should('be.visible'); 
    cy.get(selectors.advertsEditModalPriceLabel).should('be.visible').contains('Price'); 
    cy.get(selectors.advertsEditModalCurrencyInput).should('be.visible');
    cy.get(selectors.advertsEditModalCurrencyLabel).should('be.visible').contains('Price currency');
    cy.get(selectors.advertsEditModalCountryInput).should('be.visible');
    cy.get(selectors.advertsEditModalNegociateLabel).should('be.visible').contains('To negociate');
    cy.get(selectors.advertsEditModalCountryLabel).should('be.visible').contains('Country');
    cy.get(selectors.advertsEditModalBranchInput).should('be.visible');
    cy.get(selectors.advertsEditModalBranchLabel).should('be.visible').contains('Branch');
    cy.get(selectors.advertsEditModalDescriptionInput).should('be.visible');
    cy.get(selectors.advertsEditModalDescriptionLabel).should('be.visible').contains('Description');
    cy.get(selectors.advertsEditModalPhotoUploadInput);
    cy.get(selectors.advertsEditModalPhotoLabel).should('be.visible').contains('Photo');
    cy.get(selectors.advertsEditModalCancelButton).scrollIntoView().should('be.visible').contains('Cancel');
    cy.get(selectors.advertsEditModalSaveButton).scrollIntoView().should('be.visible').contains('Save');

}
}

export default advertAdding;