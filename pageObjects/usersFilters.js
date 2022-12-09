const selectors = {
    usersFiltersTitle: 'h2',
    usersFiltersHeader: '[data-testid="userFilters"]',
    usersFullNameLabel: '.css-z344g > label',
    usersFullNameInput: '[data-testid="usersInputFullName"]',
    usersEmailLabel: '[data-testid="usersEmail"]',
    usersEmailInput: '[data-testid="usersInputEmail"]',
    usersOrganizationLabel: '[data-testid="usersOrgLabel"]',
    usersOrganizationInput: '.css-epcc9a > form > :nth-child(3) > div',
    usersCountryLabel: '[data-testid="usersCountryLabel"]',
    usersCountryInput: '.css-epcc9a > form > :nth-child(4) > div',
    usersBranchLabel: '[data-testid="usersBranchLabel"]',
    usersBranchInput: '.css-epcc9a > form > :nth-child(5) > div',
    usersDepartmentLabel: '[data-testid="usersDeptLabel"]',
    usersDepartmentInput: '.css-epcc9a > form > :nth-child(6) > div',
    usersExpertiseLabel: '[data-testid="usersExpertiseLabel"]',
    usersExpertiseInput: '.css-epcc9a > form > :nth-child(7) > div',
    usersSearchButton: '[data-testid="usersSearch"]',
    usersClearButton: '[data-testid="usersClear"]',
    foundUserName: '.css-geek62 > h4'
};

class UsersFilters {
 verifyIfUsersFiltersElementsAreDisplayed(){
     cy.get(selectors.usersFiltersTitle).should('be.visible').contains('User');
     cy.get(selectors.usersFiltersHeader).should('be.visible').contains('Filters');
     cy.get(selectors.usersFullNameLabel).should('be.visible').contains('Full name');
     cy.get(selectors.usersFullNameInput).should('be.visible');
     cy.get(selectors.usersEmailLabel).should('be.visible').contains('Email');
     cy.get(selectors.usersEmailInput).should('be.visible');
     cy.get(selectors.usersOrganizationLabel).should('be.visible').contains('Organization');
     cy.get(selectors.usersOrganizationInput).should('be.visible');
     cy.get(selectors.usersCountryLabel).should('be.visible').contains('Country');
     cy.get(selectors.usersCountryInput).should('be.visible');
     cy.get(selectors.usersBranchLabel).should('be.visible').contains('Branch');
     cy.get(selectors.usersBranchInput).should('be.visible');
     cy.get(selectors.usersDepartmentLabel).should('be.visible').contains('Department');
     cy.get(selectors.usersDepartmentInput).should('be.visible');
     cy.get(selectors.usersExpertiseLabel).should('be.visible').contains('Expertise');
     cy.get(selectors.usersExpertiseInput).should('be.visible');
     cy.get(selectors.usersSearchButton).should('be.visible').contains('Search');
     cy.get(selectors.usersClearButton).should('be.visible').contains('Clear');
 }
}

class UsersSearching {
    verifyUsersSearching(){
        //filter by Name
        cy.get('.css-z344g > input').type('hanna');
        cy.get(selectors.usersSearchButton).click();
        cy.get(selectors.foundUserName).should('be.visible').contains('Hanna Wlazlo');
        
        //clear the filters
        
        //filter by Email:
        
        //filter by Organization:
        
        //filter by Country:
        
        //filter by Branch:

        //filter by Department:
        
        //filter by Expertise:

    }
}

export default {UsersFilters, UsersSearching};