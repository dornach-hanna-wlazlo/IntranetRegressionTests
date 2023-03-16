/// <reference types="cypress" />

import TopBar from '../../pageObjects/topBar';
import {NewsFilters, NewsSearching} from '../../pageObjects/newsFilters';
import NewsCenter from '../../pageObjects/newsCenter';
import ZieglerTab from '../../pageObjects/zieglerTab';
import {UsersFilters, UsersSearching} from '../../pageObjects/usersFilters';
import UsersCenter from '../../pageObjects/usersCenter';
import KnowledgeBase from '../../pageObjects/knowledgeBase';
import BranchesTab from '../../pageObjects/branchesTab';
import Footer from '../../pageObjects/footer';
import Compliance from '../../pageObjects/compliance';
import NewsPost from '../../pageObjects/newsPost';
import AdvertsCenter from '../../pageObjects/advertsCenter';
import {AdvertsFilters, AdvertsSearching} from '../../pageObjects/advertsFilters';
import AdvertDisplaying from '../../pageObjects/advertDisplaying';
import AdvertAdding from '../../pageObjects/advertAdding';
import AdvertDeleting from '../../pageObjects/advertDeleting';
import {BusinessApps, AddingNewApp, StarringTheApp} from '../../pageObjects/businessApps';

const topBar = new TopBar();
const newsFilters = new NewsFilters();
const newsSearching = new NewsSearching();
const newsCenter = new NewsCenter();
const zieglerMenu = new ZieglerTab();
const usersFilters = new UsersFilters();
const usersSearching = new UsersSearching();
const usersCenter = new UsersCenter();
const knowledgeBase = new KnowledgeBase()
const branchesTab = new BranchesTab()
const footer = new Footer();
const compliance = new Compliance();
const newsPost = new NewsPost();
const advertsCenter = new AdvertsCenter();
const advertsFilters = new AdvertsFilters();
const advertsSearching = new AdvertsSearching();
const advertDisplaying = new AdvertDisplaying();
const advertAdding = new AdvertAdding();
const advertDeleting = new AdvertDeleting();
const businessApps = new BusinessApps();
const addingNewApp = new AddingNewApp();
const starringTheApp = new StarringTheApp();

const selectors = {
  zieglerTabButton: '[data-testid="zieglerTabButton"]',
  usersTabButton: '[data-testid="usersTabButton"]',
  knowledgeBaseTabButton: '[data-testid="knowledgeBaseTabButton"]',
  branchesTabButton:'[data-testid="branchesTabButton"]',
  complianceIcon: '[data-testid="navComply"]',
  applicationsIcon: '[data-testid="navApps"]',
  postTitle: '[data-testid="postTitle"]',
  advertsTabButton: '[data-testid="advertsTabButton"]',
  advertImage: 'div.css-n8fofg',
  addNewAdvertButton: '.css-eat38v > button',
  advertTitle: '[data-testid="advertTitle"]',
  advertEditButton: '[data-testid="advertEditButton"]',
  advertDeleteButton: '[data-testid="advertDeleteButton"]',
  applicationsIcon: '[data-testid="navApps"]',


}


beforeEach(() => { 
  cy.visit('https://intranet.dornach-dev.zieglerlabs.com/news');
  
  //cy.visit('https://dev02intranet.dornach-dev.zieglerlabs.com/news' );
  //cy.wait(5000).get('#root > div > div > button').click(); //Click on back to homepage
  cy.wait(5000).get('.css-8duar0').click(); //Accept cookies
  //cy.wait(5000).get('#root > div.css-1l7zcg4 > div > a > button').click(); //Click on log in button
});

describe('NewsTabLayoutVerification', () => {

    it('TopBarLayoutVerification', () => {
      topBar.verifyIfTopBarElementsAreDisplayed();
    })

    it('FooterLayoutVerification', () => {
      footer.verifyIfFooterElementsAreDisplayed();
    })

    it('NewsFiltersLayoutVerification', () => {
      newsFilters.verifyIfNewsFiltersElementsAreDisplayed();
    })

    it('NewsCenterLayoutVerification', () => {
      newsCenter.verifyIfNewsCenterElementsAreDisplayed();
    })
  });
  
  describe('NewsPostLayoutVerification', () => {
    it('NewsPostVerification', () => {
      cy.get(selectors.postTitle).first().click();
      newsPost.verifyIfNewsPostElementsAreDisplayed();
    })
    it('TopBarLayoutVerification', () => {
      topBar.verifyIfTopBarElementsAreDisplayed();
    })

    it('FooterLayoutVerification', () => {
      footer.verifyIfFooterElementsAreDisplayed();
    })
  });

  describe('NewsSearchingVerification', () => {

    it('NewsFilteringVerification', () => {
      
      newsSearching.verifyNewsSearching();
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

    it('FooterLayoutVerification', () => {
      footer.verifyIfFooterElementsAreDisplayed();
    })

    it('ZieglerTabLayoutVerification', () => {
      zieglerMenu.verifyIfZieglerTabElementsAreDisplayed();
    })

  });

  describe('UsersTabLayoutVerification', () => {

    beforeEach(() => { 
      cy.get(selectors.usersTabButton).click();
      cy.url().should('eq', 'https://intranet.dornach-dev.zieglerlabs.com/users')
    });

    it('TopBarLayoutVerification', () => {
      topBar.verifyIfTopBarElementsAreDisplayed();
    });

    it('FooterLayoutVerification', () => {
      footer.verifyIfFooterElementsAreDisplayed();
    })

    it('UsersFiltersLayoutVerification', () => {
      usersFilters.verifyIfUsersFiltersElementsAreDisplayed();
    })

    it('UsersCenterLayoutVerification', () => {
      usersCenter.verifyIfUsersCenterElementsAreDisplayed();
    })

  });

  describe('UsersSearchingVerification', () => {
    

    it('UsersFilteringVerification', () => {
      cy.get(selectors.usersTabButton).click();
      usersSearching.verifyUsersSearching();
    })
  
  });

  describe('KnowledgeBaseTabLayoutVerification', () => {

    beforeEach(() => { 
      cy.get(selectors.knowledgeBaseTabButton).click();
      cy.url().should('eq', 'https://intranet.dornach-dev.zieglerlabs.com/knowledge-base')
    });

    it('TopBarLayoutVerification', () => {
      topBar.verifyIfTopBarElementsAreDisplayed();
    });

    it('FooterLayoutVerification', () => {
      footer.verifyIfFooterElementsAreDisplayed();
    })

    it('KnowledgeBaseLayoutVerification', () => {
      knowledgeBase.verifyIfKnowledgeBaseElementsAreDisplayed();
    });

  });

  describe('BranchesTabLayoutVerification', () => {

    beforeEach(() => { 
      cy.get(selectors.branchesTabButton).click();
      cy.url().should('eq', 'https://intranet.dornach-dev.zieglerlabs.com/branches')
    });

    it('TopBarLayoutVerification', () => {
      topBar.verifyIfTopBarElementsAreDisplayed();
    });

    it('FooterLayoutVerification', () => {
      footer.verifyIfFooterElementsAreDisplayed();
    })

    it('BranchesLayoutVerification', () => {
      branchesTab.verifyIfBranchesTabElementsAreDisplayed();
    });

  });

  describe('CompliancePageLayoutVerification', () => {

    beforeEach(() => { 
      cy.get(selectors.complianceIcon).click();
      cy.url().should('eq', 'https://intranet.dornach-dev.zieglerlabs.com/compliance')
    });

    it('TopBarLayoutVerification', () => {
      topBar.verifyIfTopBarElementsAreDisplayed();
    });

    it('FooterLayoutVerification', () => {
      footer.verifyIfFooterElementsAreDisplayed();
    })

    it('ComplianceLayoutVerification', () => {
      compliance.verifyIfCompliancePageElementsAreDisplayed();
    });

  });

  describe('AdvertsTabLayoutVerification', () => {
    beforeEach(() => { 
      cy.get(selectors.advertsTabButton).click();
      cy.url().should('eq', 'https://intranet.dornach-dev.zieglerlabs.com/adverts')
    });

    it('TopBarLayoutVerification', () => {
      topBar.verifyIfTopBarElementsAreDisplayed();
    })

    it('FooterLayoutVerification', () => {
      footer.verifyIfFooterElementsAreDisplayed();
    })

    it('AdvertsFiltersLayoutVerification', () => {
      advertsFilters.verifyIfAdvertsFiltersElementsAreDisplayed();
    })

    it('AdvertsCenterLayoutVerification', () => {
      advertsCenter.verifyIfAdvertsCenterElementsAreDisplayed();
    })
  });

  describe('AdvertDisplayingVerification', () => {
    beforeEach(() => { 
      cy.get(selectors.advertsTabButton).click();
      cy.url().should('eq', 'https://intranet.dornach-dev.zieglerlabs.com/adverts')
      cy.get(selectors.advertTitle).first().click();
    });

    it('TopBarLayoutVerification', () => {
      topBar.verifyIfTopBarElementsAreDisplayed();
    })

    it('FooterLayoutVerification', () => {
      footer.verifyIfFooterElementsAreDisplayed();
    })

    it('AdvertDisplayingVerification', () => {
      advertDisplaying.verifyIfAdvertIsDisplayedCorrectly();
    })

  });

  describe('AdvertsSearching', () => {
    beforeEach(() => { 
      cy.get(selectors.advertsTabButton).click(); 
    });
    it('AdvertSearchingVerification', () => {
      advertsSearching.verifyAdvertsSearching();
    })

  });

  describe('AdvertAdding', () => {
    beforeEach(() => { 
      cy.get(selectors.advertsTabButton).click();
      cy.get(selectors.addNewAdvertButton).click();
    });
    it('AdvertAddingLayoutVerification', () => {
      advertAdding.verifyAdvertAddingFormElements();
    })

  });

  describe('AdvertsEditing', () => {
    beforeEach(() => { 
      cy.get(selectors.advertsTabButton).click(); 
    });
    it('AdvertEditingingLayoutVerification', () => {
      advertsSearching.verifyAdvertsSearching()
      cy.wait(1000).get(selectors.advertTitle).first().click();
      cy.get(selectors.advertEditButton).click();
      advertAdding.verifyAdvertAddingFormElements();
    })

  });

  describe('AdvertsDeleting', () => {
    beforeEach(() => { 
      cy.get(selectors.advertsTabButton).click(); 
    });
    it('AdvertDeletingLayoutVerification', () => {
      advertsSearching.verifyAdvertsSearching()
      cy.wait(1000).get(selectors.advertTitle).first().click();
      cy.get(selectors.advertDeleteButton).click();
      advertDeleting.verifyIfAdvertDeletingElementsAreDisplayed;
    
    })

  });

  describe('BusinessApps', () =>{
    beforeEach(() => {
      cy.get(selectors.applicationsIcon).click();
    });
    it('BusinessAppsLayoutVerification', () => {
      businessApps.verifyIfBusinessAppsElementsAreDisplayed()
    });
    it('AddingNewAppVerification', () => {
      addingNewApp.varifyIfUserCanAddPrivateApp()
    });
    it('StarringTheAppVerification', () => {
      starringTheApp.varifyIfUserCanStarTheApp()
    })
  })



  
  