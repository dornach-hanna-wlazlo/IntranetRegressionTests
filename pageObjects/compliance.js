const selectors = {
    complianceTitle: 'h2',
    coeEn: 'div > ul > :nth-child(1) > a',
    coeFr: 'div > ul > :nth-child(2) > a',
    coeDe: 'li:nth-child(3) > a',
    zGCoe: '.css-ft9ciy',
    coeHotLine: 'div > div.css-bxak8j'
  
};

class CompliancePage {
 verifyIfCompliancePageElementsAreDisplayed(){
    cy.get(selectors.complianceTitle).should('be.visible').contains('Compliance');
    cy.get(selectors.coeEn).should('be.visible');
    cy.get(selectors.coeFr).should('be.visible');
    cy.get(selectors.coeDe).should('be.visible');
    cy.get(selectors.zGCoe).should('be.visible').contains("Ziegler Group's Code of Ethics"); 
    cy.get(selectors.coeHotLine).should('be.visible').contains('CEO compliance hot-line');

}
}

export default CompliancePage;