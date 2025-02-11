/// <reference types="cypress" /> 

import homeP from "../../8.POM/pages/2.page2"
import data from "../../../fixtures/PomData/2.dataAE"

describe("verify automation Exercise Page", () => {
    let hp = new homeP()
    data.forEach((el, indx) => {
        it("login for new user", () => {
            hp.urlVisit(hp.selectors.url)
            hp.btnClick(hp.selectors.loginSignUpbtn)
            hp.registerNewUser(el)
            //hp.btnClick(hp.selectors.signUpBtn)
        })
    })
})