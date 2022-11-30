const selectors = {
    newsTitle: 'h2',
    backToNews: 'a > div > p',
    authorOfPost: '.css-9jay18 > div.css-0 > div',
    publishedOn: 'div.css-0 > p'
  
};

class NewsPost {
 verifyIfNewsPostElementsAreDisplayed(){
    //cy.get(selectors.newsTitle).should('be.visible');
    //cy.get(selectors.backToNews).should('be.visible');
    //cy.get(selectors.authorOfPost).should('be.visible');
    cy.get(selectors.publishedOn).should('be.visible').contains('Published on');

}
}

export default NewsPost;