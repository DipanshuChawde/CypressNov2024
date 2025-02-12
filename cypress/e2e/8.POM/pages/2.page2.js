export default class homePage {
    selectors = {
        url: "https://automationexercise.com/",
        loginSignUpbtn: 'a[href="/login"]',
        // newUserForm : 'form[action="/signup"] ',
        newUserName: '[data-qa="signup-name"]',
        newUserEmail: '[data-qa="signup-email"]',
        signUpBtn: '[data-qa="signup-button"]',
       MrBtn : '[id="id_gender1"]',
       MrsBtn : '[id ="id_gender2"]',
       passwordCss : '[data-qa="password"]',
       dayCss : '[data-qa="days"]',
       monthCss : '[data-qa="months"]',
       yearCss : '[data-qa="years"]',
       newsLtr1 : '[id="newsletter"]',
       newsLtr2 : '[id="optin"]',
       firstNameCss : '[data-qa="first_name"]',
       lastNameCss : '[data-qa="last_name"]',
       companyCss  : '[for="company"]',
       address1Css : '[data-qa="address"]',
       address2Css : '[data-qa="address2"]',
       countryCss : '[data-qa="country"]',
       stateCss : '[data-qa="state"]',
       cityCss : '[data-qa="city"]',
       zipCodeCss : '[data-qa="zipcode"]',
       mobNoCss : '[data-qa="mobile_number"]',
       createAccountBtn : '[data-qa="create-account"]',
       accountCreatedCss : 'h2 > b',
       accountCreatedText : 'Account Created!'
    }

    urlVisit = (url) => {
        cy.visit(url)
    }

    btnClick = (buttonCss) => {
        cy.get(buttonCss).click()
    }

    registerNewUser = (user) => {

        cy.get(this.selectors.newUserName).type(user.NewUNm)
        cy.get(this.selectors.newUserEmail).type(user.NewUEml)
        cy.get(this.selectors.signUpBtn).click()
        
        if(user.title =="Mr"){
            cy.get(this.selectors.MrBtn).click()
        }
        else {
            cy.get(this.selectors.MrsBtn).click()
        }

        cy.get(this.selectors.passwordCss).type(user.password)
        cy.get(this.selectors.dayCss).select(user.day)
        cy.get(this.selectors.monthCss).select(user.month)
        cy.get(this.selectors.yearCss).select(user.year)
        this.btnClick(this.selectors.newsLtr1)
        this.btnClick(this.selectors.newsLtr2)
        cy.get(this.selectors.firstNameCss).type(user.fn)
        cy.get(this.selectors.lastNameCss).type(user.ln)
        cy.get(this.selectors.companyCss).type(user.company)
        cy.get(this.selectors.address1Css).type(user.address1)
        cy.get(this.selectors.address2Css).type(user.address2)
        cy.get(this.selectors.countryCss).select(user.country)
        cy.get(this.selectors.stateCss).type(user.state)
        cy.get(this.selectors.cityCss).type(user.city)
        cy.get(this.selectors.zipCodeCss).type(user.zipcode)
        cy.get(this.selectors.mobNoCss).type(user.mobNo)
        this.btnClick(this.selectors.createAccountBtn)  
        cy.wait(2000)
        this.validationText(this.selectors.accountCreatedCss,this.selectors.accountCreatedText)   
    }

    validationText(css,text){
        cy.get(css).should("have.text",text)
    }
}