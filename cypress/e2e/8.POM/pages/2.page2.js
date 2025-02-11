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
       createAccountBtn : '[data-qa="create-account"]'
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
       
    }
}