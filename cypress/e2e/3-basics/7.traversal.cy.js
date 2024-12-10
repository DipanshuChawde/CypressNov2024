/// <reference types ="cypress" />

describe('traversing DOM element', () => {

    beforeEach(function () {
        cy.visit('https://www.webdriveruniversity.com/Data-Table/index.html')
    })

    it('Tarvarsing1', () => {
        cy.get('.traversal-drinks-list >li').should('have.length',5)
        cy.get('.traversal-drinks-list >li').first().should('have.text', 'Coffee')
        cy.get('.traversal-drinks-list >li').last().should('have.text', 'Sugar')
        cy.get('.traversal-drinks-list >li').eq(2).should('have.text', 'Milk')
        cy.get('.traversal-drinks-list >li:nth-child(1)').should('have.text', 'Coffee')
        cy.get('.traversal-drinks-list >li:nth-child(5)').should('have.text', 'Sugar')
        cy.get('.traversal-drinks-list >li:nth-child(3)').should('have.text', 'Milk')
    })

    it.only('siblings',()=>{
        cy.get('#veggie').prev().should('have.text','Figs')
        cy.get('#veggie').next().should('have.text','Asparagus')
        cy.get('#veggie').prevAll().should('have.length',6)
        cy.get('#veggie').nextAll().should('have.length',4)
        cy.get('#espresso').prevUntil('#coffee').should('have.length',2)
    })

})