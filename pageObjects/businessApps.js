const selectors = {
    appsTitle: 'h2',
    navShowAllApps: '[data-testid="navShowAllApps"]',
    addPrivateLinkButton: '[data-testid="businessButton"]',
    businessAppsList: '[data-testid="businessList"]',
    separateBusinessAppAtList: '[data-testid="separateBusinessAtList"]',
    atossStar: '#root > div > div.css-38zk85 > div.css-1d5uwoa > div:nth-child(5) > div.css-k008qs > svg',
    
};

class BusinessApps {
 verifyIfBusinessAppsElementsAreDisplayed(){
    cy.get(selectors.navShowAllApps).click();
    cy.get(selectors.appsTitle).should('be.visible').contains('Business Apps');
    cy.get(selectors.addPrivateLinkButton).should('be.visible').contains('Add private link');
    cy.get(selectors.businessAppsList).should('be.visible');
    cy.get(selectors.separateBusinessAppAtList).first().should('be.visible').contains('Service Desk');
    cy.get(selectors.separateBusinessAppAtList).eq(1).should('be.visible').contains('Single Login');
    cy.get(selectors.separateBusinessAppAtList).eq(2).should('be.visible').contains('Ziegler Group Website');
    cy.get(selectors.separateBusinessAppAtList).eq(3).should('be.visible').contains('GMail');
    cy.get(selectors.separateBusinessAppAtList).eq(4).should('be.visible').contains('Atoss');
    cy.get(selectors.separateBusinessAppAtList).eq(5).should('be.visible').contains('B2P'); 
}
}

class AddingNewApp {
    varifyIfUserCanAddPrivateApp(){
        cy.get(selectors.navShowAllApps).click();
        cy.get(selectors.addPrivateLinkButton).click();
        //cy.get('iframe');
    }
}

class StarringTheApp {
    varifyIfUserCanStarTheApp(){
        cy.get(selectors.navShowAllApps).click();
        cy.get(selectors.atossStar).click();
        
    }
}



export default {BusinessApps, AddingNewApp, StarringTheApp};