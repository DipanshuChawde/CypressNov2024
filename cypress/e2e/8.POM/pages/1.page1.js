export default class myPage {
    selector = {
        url : "https://www.webdriveruniversity.com/Contact-Us/contactus.html",
        fn : '[name="first_name"]',
        ln : '[name="last_name"]',
        email : '[name="email"]',
        msg : '[name="message"]',
        submitBtn : '[value="SUBMIT"]',
        resetBtn : '[value="RESET"]',
        positiveValid : 'h1',
        validationMsg : "Thank You for your Message!"

    }

    visitUrl(){
        cy.visit(this.selector.url)
    }

    contactUsPage() {
        cy.get(this.selector.fn).type("dipanshu")
        cy.get(this.selector.ln).type("chawde")
        cy.get(this.selector.email).type("dipanshu@gmail.com")
        cy.get(this.selector.msg).type("i m learning pom")
    }

    btnClick() {
        cy.get(this.selector.submitBtn).click()
    }

    validation(){
        cy.get(this.selector.positiveValid).should("have.text", this.selector.validationMsg)
    }
}