///<reference types ="cypress" />

import homeP from "../pages/1.page1"

describe("verify contact us page",()=>{
    let hp = new homeP()
    it("verify contact us page",()=>{
        hp.visitUrl()
        hp.contactUsPage()
        hp.btnClick()
        hp.validation()


    })
})