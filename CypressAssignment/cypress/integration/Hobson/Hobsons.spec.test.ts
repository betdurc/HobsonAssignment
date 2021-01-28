import HomePage from "../../pageActions/HomePageActions";
import IntersectPage from "../../pageActions/IntersectPageActions";

describe("Home Page Tests", () => {
  before(() => {
    HomePage.Visit();
  });

  it("Verify Title on Home Page", () => {
     HomePage.Verify();
   });
  
   it("“Advancing Lifetime Student Success”. Select the “Intersect”", () => {
     HomePage.VerifyHeroGraphicWithText();
     HomePage.NaviagteToIntersect();
     IntersectPage.VerifyPageTitle();
   });
   
   it("Verify US Map is visible in the section “The Growing Naviance Footprint”", ()=>{
      IntersectPage.scrollToMap();
   });

   // currently verifying for 18 different state or group of states 
   it("Verify the Data coming according to the State or group of state selected", ()=>{
     IntersectPage.VerifyTextWRTStateSelected();
   })


});
