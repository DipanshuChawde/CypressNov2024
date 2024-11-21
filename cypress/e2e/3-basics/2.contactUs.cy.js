///<reference types='cypress' />

describe('verify contact us page',function(){
    it('verify contact us page for valid data',function(){
        //AAA

        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')

        cy.get('[name="first_name"]').type('dipanshu')
        cy.get('[name="last_name"]').type('chawde')
        cy.get('[name="email"]').type('dipanshu@gamil.com')
        cy.get('[name="message"]').type('hi')

        cy.get('[type="submit"]').click()

        cy.get('h1').should('have.text','Thank You for your Message!')
    })
})