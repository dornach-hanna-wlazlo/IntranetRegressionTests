const selectors = {
    knowledgeBaseTitle: 'h2',
    knowledgeBaseTile:'[data-testid="knowledgeBaseRepository"]',
    knowledgeBaseListContainer:'[data-testid="knowledgeBaseListContainer"]',
    cargoSwiftFRFolder: ':nth-child(12) > div',
    searchForm: 'form > div > input',
    searchButton: 'form > div > button',
    foldersLabel: 'div.css-11yk2zr > p',
    filesLabel: '.css-1y6z4gu > p',
    knowledgeBaseFolder: '[data-testid="knowledgeBaseFolder"]',
    knowledgeBaseFile: '[data-testid="knowledgeBaseFile"]'
   
};

class KnowledgeBase {
 verifyIfKnowledgeBaseElementsAreDisplayed(){
    cy.get(selectors.knowledgeBaseTitle).should('be.visible').contains('Knowledge Base');
    cy.get(selectors.knowledgeBaseListContainer).should('be.visible');
    cy.get(selectors.knowledgeBaseTile).should('be.visible');
}
}

class KnowledgeBaseFolder {
 verifyOpeningTheFolderInKnowledgeBase(){
    cy.get(selectors.cargoSwiftFRFolder).click();
    cy.url().should('eq', 'https://intranet.dornach-dev.zieglerlabs.com/knowledge-base/21');
    cy.get(selectors.knowledgeBaseTitle).should('be.visible').contains('CargoSwift FR');
    cy.get(selectors.searchForm).should('be.visible');
    cy.get(selectors.searchButton).should('be.visible');
    cy.get(selectors.foldersLabel).should('be.visible').contains('Folders');
    cy.get(selectors.filesLabel).should('be.visible').contains('Files');
    cy.get(selectors.knowledgeBaseFolder).should('be.visible').its('length').should('eq', 4);
    cy.get(selectors.knowledgeBaseFile).should('be.visible').its('length').should('eq', 20);
    cy.get(selectors.knowledgeBaseFolder).first().click();
 }

}

export default {KnowledgeBase, KnowledgeBaseFolder};