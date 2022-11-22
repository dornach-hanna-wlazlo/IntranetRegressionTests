const selectors = {
    usersItemsPerPage: '.css-nzc325 > .css-k008qs',
    usersPagination: '.css-5l1nhg',
    usersList:'.css-v2kfba',
    separateUsertAtList: '.css-1w9kb68 > div',
    userAvatar: '.css-geek62 > img',
    userName: '.css-geek62 > h4',
};

class usersCenter {
 verifyIfUsersCenterElementsAreDisplayed(){
     cy.get(selectors.usersItemsPerPage).should('be.visible');
     cy.get(selectors.usersPagination).should('be.visible').its('length').should('eq', 2);
     cy.get(selectors.usersList).should('be.visible');
     cy.get(selectors.separateUsertAtList).should('be.visible').its('length').should('eq', 15);
     cy.get(selectors.userAvatar).should('be.visible').its('length').should('eq', 15);
     cy.get(selectors.userName).should('be.visible').its('length').should('eq', 15);

 }
}

export default usersCenter;