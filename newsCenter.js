

const selectors = {
    newsItemsPerPage: '.css-119smrs > .css-k008qs',
    newsPagination: '.css-5l1nhg',
    newsList:'[data-testid="newsNewsList"]',
    separatePostAtList: '.css-1sdxwuc > div',
    postImage: '.css-15sbw5e > a',
    postPublicationDate: '.css-1wi5m9r >.css-j7qwjs > p',
    postTitle: 'a > div > h2',
    postAuthorAvatar: '.css-j7qwjs > div > span',
    postAuthorName: '.css-j7qwjs > div > div'
   
};

class NewsCenter {
 verifyIfNewsCenterElementsAreDisplayed(){
     cy.get(selectors.newsItemsPerPage).should('be.visible');
     cy.get(selectors.newsPagination).should('be.visible').its('length').should('eq', 2);
     cy.get(selectors.newsList).should('be.visible');
     cy.get(selectors.separatePostAtList).should('be.visible').its('length').should('eq', 15);
     cy.get(selectors.postImage).should('be.visible').its('length').should('eq', 15);
     cy.get(selectors.postPublicationDate).should('be.visible').its('length').should('eq', 15);
     cy.get(selectors.postTitle).should('be.visible').its('length').should('eq', 15);
     cy.get(selectors.postAuthorAvatar).should('be.visible').its('length').should('eq', 15);
     cy.get(selectors.postAuthorName).should('be.visible').its('length').should('eq', 15);
     
}
}

export default NewsCenter;