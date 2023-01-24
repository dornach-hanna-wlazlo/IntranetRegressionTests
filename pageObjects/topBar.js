const selectors = {
       newsTabButton: '[data-testid="newsTabButton"]',
       zieglerTabButton: '[data-testid="zieglerTabButton"]',
       usersTabButton: '[data-testid="usersTabButton"]',
       knowledgeBaseTabButton: '[data-testid="knowledgeBaseTabButton"]',
       branchesTabButton:'[data-testid="branchesTabButton"]',
       forumTabButton: '[data-testid="forumTabButton"]',
       advertsTabButton: ':nth-child(8) > button',
       dornachIcon: '[data-testid="navDornach"]',
       applicationsIcon: '[data-testid="navApps"]',
       complianceIcon: '[data-testid="navComply"]',
       userAvatar: '[data-testid="navUser"]'
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
        cy.get(selectors.userAvatar).should('be.visible')
    }
}

export default TopBar;
