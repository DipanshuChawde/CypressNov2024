/// <reference types ="cypress" />
import myPage from "../pages/AECoUs"
import data from "../../../fixtures/AEPAyload.json"

describe("automation Exercise contact Us",()=>{
    let hp = new myPage()
    data.forEach((el,idx)=>{
    it("contact us page with alert Ok",()=>{
        hp.visitUrl()
        hp.formDataFill(el)
        hp.buttonCkickWithAlertHandle(hp.selectors.submitBtnCss,true)


    })
})

data.forEach((el,idx)=>{
    it("contact us page with alert cancle",()=>{
        hp.visitUrl()
        hp.formDataFill(el)
        hp.buttonCkickWithAlertHandle(hp.selectors.submitBtnCss,false)


    })
})
})