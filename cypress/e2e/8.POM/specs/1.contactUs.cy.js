///<reference types ="cypress" />

import homeP from "../pages/1.page1"
import data from "../../../fixtures/2.CUPload.json"
describe("verify contact us page", () => {
    let hp = new homeP()

    let user1 = {
        name: "neel",
        lastname: "chawde",
        email: "neel@gmail.com",
        message: "i m learning cypress"

    }
    it("verify contact us page", () => {
        hp.visitUrl()
        hp.contactUsPage()
        hp.btnClick()
        hp.validation()
    })
    it("verify contact us page2 ", () => {
        hp.visitUrl()
        // hp.contactUsPage2("neel", "chawde", "neel@gmail.com", "i m learning cypress")
        hp.contactUsPage3(user1)
        hp.btnClick()
        hp.validation()

    })

    data.forEach((el,idx)=>{
        it.only(`verify contact us page with POM and fixture for user no ${idx+1} and user-${el.fn}`,()=>{
            hp.visitUrl()
            hp.contactUsPage4(el)
            hp.btnClick()
            hp.validation()

        })
    })
})