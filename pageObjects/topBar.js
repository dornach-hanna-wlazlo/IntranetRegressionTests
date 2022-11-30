const selectors = {
       newsTabButton: '.css-w6ajip > :nth-child(1)',
       zieglerTabButton: '#menu-button-2',
       usersTabButton: '#menu-button-4',
       knowledgeBaseTabButton: '.css-w6ajip > :nth-child(6)',
       branchesTabButton:'button:nth-child(7)',
       forumTabButton: '.css-w6ajip > :nth-child(8)',
       advertsTabButton: '.css-w6ajip > :nth-child(9)',
       dornachIcon: '[data-testid="navDornach"]',
       applicationsIcon: '[data-testid="navApps"]',
       complianceIcon: '[data-testid="navComply"]'
};

class TopBar {
    verifyIfTopBarElementsAreDisplayed(){
        cy.get(selectors.newsTabButton).should('be.visible').contains('News');
        cy.get(selectors.zieglerTabButton).should('be.visible').contains('Ziegler');
        cy.get(selectors.usersTabButton).should('be.visible').contains('Users');
        cy.get(selectors.knowledgeBaseTabButton).should('be.visible').contains('Knowledge Base');
        cy.get(selectors.branchesTabButton).should('be.visible').contains('Branches');
        cy.get(selectors.forumTabButton).should('be.visible').contains('Forum');
        cy.get(selectors.advertsTabButton).should('be.visible').contains('Adverts');
        cy.get(selectors.dornachIcon).should('be.visible');
        cy.get(selectors.applicationsIcon).should('be.visible');
        cy.get(selectors.complianceIcon).should('be.visible');
    }
}

export default TopBar;
