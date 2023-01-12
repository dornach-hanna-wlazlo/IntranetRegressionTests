const selectors = {
    usersFiltersTitle: 'h2',
    usersFiltersHeader: '[data-testid="userFilters"]',
    usersFullNameLabel: '[data-testid="usersFullNameLabel"]',
    usersFullNameInput: '[data-testid="usersFullNameInput"]',
    usersEmailLabel: '[data-testid="usersEmailLabel"]',
    usersEmailInput: '[data-testid="usersEmailInput"]',
    usersOrganizationLabel: '[data-testid="usersOrgLabel"]',
    usersOrganizationInput: '[data-testid="usersOrgInput"]',
    usersCountryLabel: '[data-testid="usersCountryLabel"]',
    usersCountryInput: '[data-testid="usersCountryInput"]',
    usersBranchLabel: '[data-testid="usersBranchLabel"]',
    usersBranchInput: '[data-testid="usersBranchInput"]',
    usersDepartmentLabel: '[data-testid="usersDeptLabel"]',
    usersDepartmentInput: '[data-testid="usersDeptInput"]',
    usersExpertiseLabel: '[data-testid="usersExpertiseLabel"]',
    usersExpertiseInput: '[data-testid="usesrsExpertiseInput"]',
    usersSearchButton: '[data-testid="usersSearchButton"]',
    usersClearButton: '[data-testid="usersClearButton"]',
    foundUserName: '.css-geek62 > h4',
    foundUserName2: ':nth-child(3) > .css-geek62 > h4',
    foundUserName3: 'div.css-geek62 > h4',
    foundUserName4: ':nth-child(1) > .css-geek62 > h4',
    foundUserName5: ':nth-child(2) >.css-geek62 > h4',
    foundUserName6: 'div > .css-geek62 > h4',
    orgCarga: '[id="react-select-4-option-0"]',
    countryChina: '[id="react-select-5-option-1"]',
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
        cy.get(selectors.usersClearButton).click();
        cy.get(selectors.foundUserName2).should('be.visible').contains('Aleksandra Nowak');
        //filter by Email:
        cy.get(selectors.usersEmailInput).type('agnieszka.szulc@dornach.eu')
        cy.get(selectors.usersSearchButton).click();
        cy.get(selectors.foundUserName3).should('be.visible').contains('Agnieszka Szulc');
        //filter by Organization:
        cy.get(selectors.usersClearButton).click();
        cy.get(selectors.usersOrganizationInput).click();
        cy.get(selectors.orgCarga).click();
        cy.get(selectors.usersSearchButton).click();
        cy.wait(500)
        cy.get(selectors.foundUserName4).should('be.visible').contains('Jan Hoffmann');
        cy.get(selectors.foundUserName5).should('be.visible').contains('Pascal Panchart');
        //filter by Country:
        cy.get(selectors.usersClearButton).click();
        cy.get(selectors.usersCountryInput).click();
        cy.get(selectors.countryChina).click()
        cy.get(selectors.usersSearchButton).click();
        cy.get(selectors.foundUserName6).should('be.visible').contains('Michał Kubiak');
        //filter by Branch:

        //filter by Department:
        
        //filter by Expertise:

    }
}

export default {UsersFilters, UsersSearching};