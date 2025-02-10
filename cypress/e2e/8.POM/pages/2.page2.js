export default class homePage {
    selectors = {
        url: "https://automationexercise.com/",
        loginSignUpbtn: 'a[href="/login"]',
        // newUserForm : 'form[action="/signup"] ',
        newUserName: '[data-qa="signup-name"]',
        newUserEmail: '[data-qa="signup-email"]',
        signUpBtn: '[data-qa="signup-button"]'
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
    }
}