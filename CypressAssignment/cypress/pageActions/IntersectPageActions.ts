import * as HobsonPageData from "../Data/HobsonsPageData.json";
import IntersectPageObjects from "../pageObjects/IntersectPageObjects";
import * as HobsonsMapData from "../Data/HobsonsUSMapData.json";

class Intersect
{
    static VerifyPageTitle() {
        cy.get(IntersectPageObjects.intersectPageTitle).should("contain", HobsonPageData.IntersectTitle);
      };

    static scrollToMap(){
       // cy.get(IntersectPageObjects.USMapSection).scrollTo("bottom", { ensureScrollable: false });
       cy.scrollTo(0, 3500);
       cy.get(IntersectPageObjects.mapBlocktitle).should("contain", HobsonPageData.MapSectionTitle).click();
       
       cy.wait(1000);
    }

    static VerifyTextWRTStateSelected(){
       
         // Importing json data into array
         let listStateId : string[] = [];
          HobsonsMapData.state.forEach(element=> listStateId.push(element.stateID))
         let listStatedata : string[] = [];
          HobsonsMapData.state.forEach(element=> listStatedata.push(element.stateData))
          
       for (let i = 0; i < HobsonsMapData.state.length; i++) {
        cy.get(IntersectPageObjects.stateDropDown).select(listStateId[i]).should("have.value",listStateId[i]);
        cy.get(IntersectPageObjects.stateStudentData).should("contain", listStatedata[i]);
    }
    }
}

export default Intersect;