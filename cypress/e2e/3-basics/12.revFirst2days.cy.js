/// <reference types="cypress" />
describe('rev of fiest day (verify contact us page vith valid and invalid data)',()=>{ //test suit 
    it("verify contact us page with valid data",()=>{
        //AAA
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')

        cy.get('[name="first_name"]').type('Dipanshu')
        cy.get('[name="last_name"]').type('chawde')
        cy.get('[name="email"]').type('dipanshu@gmil.com')
        cy.get('[name="message"]').type('hi,how are you?')

        cy.get('[type="submit"]').click()

        cy.get('h1').should('have.text','Thank You for your Message!')
    })

    it("verify contact us page with invalid data",()=>{
        //AAA
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')

        cy.get('[name="first_name"]').type('Dipanshu')
        cy.get('[name="last_name"]').type('chawde')
        cy.get('[name="email"]').type('dipanshugmil.com')
        cy.get('[name="message"]').type('hi,how are you?')

        cy.get('[type="submit"]').click()

        cy.contains('Error: Invalid email address').should('be.visible')
    })
    it.only("verify contact us page with valid data with custom command",()=>{
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.contactUs('Dipanshu','chawde','dipanshu@gmail.com','i am learning cypress')
        cy.get('h1').should('have.text','Thank You for your Message!')

    })

    it.only("verify contact us page with invalid data",()=>{
        //AAA
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')

        cy.contactUs('Dipanshu','chawde','dipanshugmail.com','i am learning cypress')

        cy.contains('Error: Invalid email address').should('be.visible')
    })

})
