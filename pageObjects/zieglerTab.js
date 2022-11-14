const selectors = {
    zieglerMenuTitle: 'h2',
    countriesButton: '.css-x7bmyt > :nth-child(2)',
    dornachButton: '.null.css-154a8b7',
    zieglerOneButton: '#accordion-button-34',
    aboutZieglerContent: 'div.css-8atqhb > div'
};

class zieglerTab {
 verifyIfZieglerTabElementsAreDisplayed(){
     cy.get(selectors.zieglerMenuTitle).should('be.visible').contains('About Ziegler');
     cy.get(selectors.countriesButton).should('be.visible').contains('Countries');
     cy.get(selectors.dornachButton).should('be.visible').contains('Dornach');
     cy.get(selectors.zieglerOneButton).should('be.visible').contains('ZieglerOne');
     cy.get(selectors.aboutZieglerContent).should('be.visible');
 }
}

export default zieglerTab;