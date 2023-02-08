const selectors = {
    newsTitle: 'h2',
    backToNews: 'a > div > p',
    authorOfPost: '.css-9jay18 > div.css-0 > div',
    publishedOn: 'div.css-0 > p',
    likes: '.css-x97jm9 > div',
    comment: '.css-70qvj9 > .zIcon.css-141nors',
    copyLink: '.css-j065b6 > div',
    postImage: 'div.css-111p67o',
    commentsBelowThePost: '.css-0 > h2',
    avatarInCommenting: '.css-zyidnu > div > span',
    commentingArea: '.css-zyidnu > div',
    commentingWindow: '.DraftEditor-root > div',
    publishCommentButton: '.css-zyidnu > button'
  
};

class NewsPost {
 verifyIfNewsPostElementsAreDisplayed(){
    cy.get(selectors.newsTitle).should('be.visible');
    cy.get(selectors.backToNews).should('be.visible').contains('Back to News');
    cy.get(selectors.authorOfPost).should('be.visible');
    cy.get(selectors.publishedOn).should('be.visible').contains('Published on');
    cy.get(selectors.likes).should('be.visible');
    //cy.get(selectors.comment).should('be.visible');
    //cy.get(selectors.copyLink).should('be.visible');
    cy.get(selectors.postImage).should('be.visible');
    cy.get(selectors.commentsBelowThePost).should('be.visible');
    cy.get(selectors.avatarInCommenting).should('be.visible');
    cy.get(selectors.commentingArea).should('be.visible');
    //cy.get(selectors.commentingWindow).should('be.visible');
    cy.get(selectors.publishCommentButton).should('be.visible').should('be.disabled');

}
}

export default NewsPost;