/// <reference types="cypress" />

import TopBar from '../../pageObjects/topBar';
import NewsFilters from '../../pageObjects/newsFilters';
import NewsCenter from '../../pageObjects/newsCenter';
import ClickOnZieglerTab from '../../pageObjects/topBar';

const topBar = new TopBar();
const newsFilters = new NewsFilters();
const newsCenter = new NewsCenter();
const selectors = {
  zieglerTabButton: '#menu-button-2'
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

  
  describe.only('ZieglerTabLayoutVerification', () => {

    beforeEach(() => { 
      cy.get(selectors.zieglerTabButton).click();
    });


    it.only('TopBarLayoutVerification', () => {
      topBar.verifyIfTopBarElementsAreDisplayed();
    })

    it('ZieglerMenuLayoutVerification', () => {
      
    })

    it('ZieglerCenterLayoutVerification', () => {
      
    })

  
  });




  
  