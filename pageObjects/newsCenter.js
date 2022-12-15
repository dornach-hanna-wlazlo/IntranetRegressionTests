const selectors = {
    newsTopItemsPerPage: '[data-testid="newsTopItemsPerPage"]',
    newsBottomItemsPerPage: '[data-testid="newsBottomItemsPerPage"]',
    newsTopPagination: '[data-testid="newsTopPagination"]',
    newsBottomPagination: '[data-testid="newsBottomPagination"]',
    newsList:'[data-testid="newsNewsList"]',
    separatePostAtList: '[data-testid="separatePostAtList"]',
    postImage: '[data-testid="postImage"]',
    postPublicationDate: '[data-testid="postPublicationDate"]',
    postTitle: '[data-testid="postTitle"]',
    postAuthorAvatar: '[data-testid="postAuthorAvatar"]',
    postAuthorName: '[data-testid="postAuthorName"]'
};

class NewsCenter {
 verifyIfNewsCenterElementsAreDisplayed(){
     cy.get(selectors.newsTopItemsPerPage).should('be.visible');
     cy.get(selectors.newsTopPagination).should('be.visible');
     cy.get(selectors.newsBottomItemsPerPage).should('be.visible');
     cy.get(selectors.newsBottomPagination).should('be.visible');
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