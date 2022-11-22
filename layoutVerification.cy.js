/// <reference types="cypress" />

import TopBar from '../../pageObjects/topBar';
import NewsFilters from '../../pageObjects/newsFilters';
import NewsCenter from '../../pageObjects/newsCenter';
import ZieglerTab from '../../pageObjects/zieglerTab';
import UsersFilters from '../../pageObjects/usersFilters';
import UsersCenter from '../../pageObjects/usersCenter';


const topBar = new TopBar();
const newsFilters = new NewsFilters();
const newsCenter = new NewsCenter();
const zieglerMenu = new ZieglerTab();
const usersFilters = new UsersFilters();
const usersCenter = new UsersCenter();

const selectors = {
  zieglerTabButton: '#menu-button-2',
  usersTabButton: '#menu-button-4',
  knowledgeBaseTabButton: '.css-w6ajip > :nth-child(6)',
  branchesTabButton:'button:nth-child(7)',
}


beforeEach(() => { 
  cy.visit('https://intranet.dornach-dev.zieglerlabs.com/news');
  cy.get('.css-12bqvmo').click();
});

describe('NewsTabLayoutVerification', () => {

    it('TopBarLayoutVerification', () => {
      topBar.verifyIfTopBarElementsAreDisplayed();
    })

    it('NewsFiltersLayoutVerification', () => {
      newsFilters.verifyIfNewsFiltersElementsAreDisplayed();
    })

    it('NewsCenterLayoutVerification', () => {
      newsCenter.verifyIfNewsCenterElementsAreDisplayed();
    })

  
  });

  
  describe('ZieglerTabLayoutVerification', () => {

    beforeEach(() => { 
      cy.get(selectors.zieglerTabButton).click();
      cy.url().should('eq', 'https://intranet.dornach-dev.zieglerlabs.com/about-ziegler')
    });

    it('TopBarLayoutVerification', () => {
      topBar.verifyIfTopBarElementsAreDisplayed();
    })

    it('ZieglerTabLayoutVerification', () => {
      zieglerMenu.verifyIfZieglerTabElementsAreDisplayed();
    })

  });

  describe.only('UsersTabLayoutVerification', () => {

    beforeEach(() => { 
      cy.get(selectors.usersTabButton).click();
      cy.url().should('eq', 'https://intranet.dornach-dev.zieglerlabs.com/users')
    });

    it('TopBarLayoutVerification', () => {
      topBar.verifyIfTopBarElementsAreDisplayed();
    });

    it('UsersFiltersLayoutVerification', () => {
      usersFilters.verifyIfUsersFiltersElementsAreDisplayed();
    })

    it('UsersCenterLayoutVerification', () => {
      usersCenter.verifyIfUsersCenterElementsAreDisplayed();
    })


  });

  describe('KnowledgeBaseTabLayoutVerification', () => {

    beforeEach(() => { 
      cy.get(selectors.knowledgeBaseTabButton).click();
      cy.url().should('eq', 'https://intranet.dornach-dev.zieglerlabs.com/knowledge-base')
    });

    it('KnowledgeBaseLayoutVerification', () => {
      
    });

  });

  describe('BranchesTabLayoutVerification', () => {

    beforeEach(() => { 
      cy.get(selectors.branchesTabButton).click();
      cy.url().should('eq', 'https://intranet.dornach-dev.zieglerlabs.com/branches')
    });

    it('BranchesLayoutVerification', () => {
      
    });

  });




  
  