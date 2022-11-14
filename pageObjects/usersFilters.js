const selectors = {
    usersFiltersTitle: 'h2',
    usersFiltersHeader: '[data-testid="userFilters"]'
    
};

class usersFilters {
 verifyIfUsersFiltersElementsAreDisplayed(){
     cy.get(selectors.usersFiltersTitle).should('be.visible').contains('User');
     cy.get(selectors.usersFiltersHeader).should('be.visible').contains('Filters');
  
 }
}

export default usersFilters;