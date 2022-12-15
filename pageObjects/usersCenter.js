const selectors = {
    usersTopItemsPerPage: '[data-testid="usersTopItemsPerPage"]',
    usersBottomItemsPerPage: '[data-testid="usersBottomItemsPerPage"]',
    usersTopPagination: '[data-testid="usersTopPagination"]',
    usersBottomPagination: '[data-testid="usersBottomPagination"]',
    usersList:'[data-testid="userList"]',
    separateUsertAtList: '[data-testid="separateUsertAtList"]',
    userAvatar: '[data-testid="userAvatar"]',
    userName: '[data-testid="userName"]',

};

class usersCenter {
 verifyIfUsersCenterElementsAreDisplayed(){
     cy.get(selectors.usersTopItemsPerPage).should('be.visible');
     cy.get(selectors.usersTopPagination).should('be.visible');
     cy.get(selectors.usersBottomItemsPerPage).should('be.visible');
     cy.get(selectors.usersBottomPagination).should('be.visible');
     cy.get(selectors.usersList).should('be.visible');
     cy.get(selectors.separateUsertAtList).should('be.visible').its('length').should('eq', 15);
     cy.get(selectors.userAvatar).should('be.visible').its('length').should('eq', 15);
     cy.get(selectors.userName).should('be.visible').its('length').should('eq', 15);

 }
}

export default usersCenter;