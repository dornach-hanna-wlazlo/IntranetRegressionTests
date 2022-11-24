const selectors = {
    knowledgeBaseTitle: 'h2',
    knowledgeBaseTile: 'div > div > div > div > div > img'
   
};

class KnowledgeBase {
 verifyIfKnowledgeBaseElementsAreDisplayed(){
    cy.get(selectors.knowledgeBaseTitle).should('be.visible').contains('Knowledge Base');
    cy.get(selectors.knowledgeBaseTile).should('be.visible');
}
}

export default KnowledgeBase;