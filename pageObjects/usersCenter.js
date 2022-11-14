const selectors = {
    usersFiltersTitle: '',
    
};

class usersCenter {
 verifyIfUsersCenterElementsAreDisplayed(){
     cy.get(selectors.usersFiltersTitle).should('be.visible').contains('');
  
 }
}

export default usersCenter;