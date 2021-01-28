import HomePageObjects from "../pageObjects/HomePageObjects";
///<reference types="cypress-iframe" />

class HomePage {
  static NaviagteToIntersect() {
    cy.get(HomePageObjects.intersectLearnMore).click();
  }
  
  static VerifyHeroGraphicWithText() {
    cy.get(HomePageObjects.bannerHomeTitle).should("contain","Advancing Lifetime Student Success");
  }

  static Visit() {
    cy.visit("/");
  };

  static Verify() {
    cy.title().should("equal", HomePageObjects.homePageTitle);
  };


}

export default HomePage;
