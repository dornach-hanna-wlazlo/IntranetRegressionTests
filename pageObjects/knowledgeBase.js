const selectors = {
    knowledgeBaseTitle: 'h2',
    knowledgeBaseTile:'[data-testid="knowledgeBaseRepository"]',
    knowledgeBaseListContainer:'[data-testid="knowledgeBaseListContainer"]'
   
};

class KnowledgeBase {
 verifyIfKnowledgeBaseElementsAreDisplayed(){
    cy.get(selectors.knowledgeBaseTitle).should('be.visible').contains('Knowledge Base');
    cy.get(selectors.knowledgeBaseListContainer).should('be.visible');
    cy.get(selectors.knowledgeBaseTile).should('be.visible');
}
}

export default KnowledgeBase;