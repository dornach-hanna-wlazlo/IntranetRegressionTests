const selectors = {
    branchesTitle: 'h2',
    branchesItemsPerPage: '.css-k008qs',
    branchesPagination: '.css-5l1nhg',
    branchesTable: '.css-175no8z',
    branchesColumnTitles: '.css-12ezmlb',
    branchNameColumnTitle: 'div.css-jh3a5k > div > table > thead > tr > th > div.css-12ezmlb > div.css-0',
    countryColumnTitle:'.css-ayshjd > div > table > thead > tr > :nth-child(1) > .css-12ezmlb > .css-0',
    organizationColumnTitle:':nth-child(2) > .css-12ezmlb > .css-0',
    emailColumnTitle: ':nth-child(3) > .css-12ezmlb > .css-0',
    phoneColumnTitle:':nth-child(4) > .css-12ezmlb > .css-0',
    cityColumnTitle:':nth-child(5) > .css-12ezmlb > .css-0',
    postCodeColumnTitle: ':nth-child(6) > .css-12ezmlb > .css-0',
    addressColumnTitle: ':nth-child(7) > .css-12ezmlb > .css-0',
    certificatesColumnTitle: ' :nth-child(8) > .css-12ezmlb > .css-0'
};

class BranchesTab {
 verifyIfBranchesTabElementsAreDisplayed(){
    cy.get(selectors.branchesTitle).should('be.visible').contains('Branches');
    cy.get(selectors.branchesItemsPerPage).should('be.visible');
    cy.get(selectors.branchesPagination).should('be.visible');
    cy.get(selectors.branchesTable).should('be.visible');
    cy.get(selectors.branchesColumnTitles).should('be.visible').its('length').should('eq', 9);
    cy.get(selectors.branchNameColumnTitle).should('be.visible').contains('Branch');
    cy.get(selectors.countryColumnTitle).should('be.visible').contains('Country');
    cy.get(selectors.organizationColumnTitle).should('be.visible').contains('Organization');
    cy.get(selectors.emailColumnTitle).should('be.visible').contains('E-mail');
    cy.get(selectors.phoneColumnTitle).scrollIntoView().should('be.visible').contains('Phone');
    cy.get(selectors.cityColumnTitle).scrollIntoView().should('be.visible').contains('City');
    cy.get(selectors.postCodeColumnTitle).scrollIntoView().should('be.visible').contains('Post code');
    cy.get(selectors.addressColumnTitle).scrollIntoView().should('be.visible').contains('Address');
    cy.get(selectors.certificatesColumnTitle).scrollIntoView().should('be.visible').contains('Certificates');
}
}

export default BranchesTab;