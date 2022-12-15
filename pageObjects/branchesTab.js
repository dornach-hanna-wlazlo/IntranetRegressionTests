const selectors = {
    branchesTitle: 'h2',
    branchesTopItemsPerPage: '[data-testid="branchesTopItemsPerPage"]',
    branchesTopPagination: '[data-testid="branchesTopPagination"]',
    branchesTable: '[data-testid="branchesTable"]',
    branchesColumnTitles: '[data-testid="branchesTableUnpinnedColumnTitle"]',
    branchNameColumnTitle: '[data-testid="branchesTablePinnedLeftBranchNameColumnTitle"]',
    countryColumnTitle:'[data-testid="branchesTableUnpinnedCountryColumnTitle"]',
    organizationColumnTitle:'[data-testid="branchesTableUnpinnedCompanyColumnTitle"]',
    emailColumnTitle: '[data-testid="branchesTableUnpinnedEmailColumnTitle"]',
    phoneColumnTitle:'[data-testid="branchesTableUnpinnedPhoneColumnTitle"]',
    cityColumnTitle:'[data-testid="branchesTableUnpinnedCityColumnTitle"]',
    postCodeColumnTitle: '[data-testid="branchesTableUnpinnedPostcodeColumnTitle"]',
    addressColumnTitle: '[data-testid="branchesTableUnpinnedAddressColumnTitle"]',
    certificatesColumnTitle: '[data-testid="branchesTableUnpinnedCertificatesColumnTitle"]',
    separateBranchAtList: '[data-testid="branchesTablePinnedLeftSeparate"]'
};

class BranchesTab {
 verifyIfBranchesTabElementsAreDisplayed(){
    cy.get(selectors.branchesTitle).should('be.visible').contains('Branches');
    cy.get(selectors.branchesTopItemsPerPage).should('be.visible');
    cy.get(selectors.branchesTopPagination).should('be.visible');
    cy.get(selectors.branchesTable).should('be.visible');
    cy.get(selectors.branchesColumnTitles).should('be.visible');
    cy.get(selectors.branchNameColumnTitle).should('be.visible').contains('Branch');
    cy.get(selectors.countryColumnTitle).should('be.visible').contains('Country');
    cy.get(selectors.organizationColumnTitle).should('be.visible').contains('Organization');
    cy.get(selectors.emailColumnTitle).should('be.visible').contains('E-mail');
    cy.get(selectors.phoneColumnTitle).scrollIntoView().should('be.visible').contains('Phone');
    cy.get(selectors.cityColumnTitle).scrollIntoView().should('be.visible').contains('City');
    cy.get(selectors.postCodeColumnTitle).scrollIntoView().should('be.visible').contains('Post code');
    cy.get(selectors.addressColumnTitle).scrollIntoView().should('be.visible').contains('Address');
    cy.get(selectors.certificatesColumnTitle).scrollIntoView().should('be.visible').contains('Certificates');
    cy.get(selectors.separateBranchAtList).should('be.visible').its('length').should('eq', 15);
}
}

export default BranchesTab;