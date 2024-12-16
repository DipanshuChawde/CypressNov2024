//before,beforeEach,after,afterEach

/// <reference types="cypress" />
describe('hooks rev', function () {
    before(function () {
        cy.log('i m in before block will execute only once at first')
    })
    beforeEach(function () {
        cy.log('i m in beforeEach block will execute before every test case')
    })
    after(function () {
        cy.log('i m in after block will execute only once at last')
    })
    afterEach(function () {
        cy.log('i m in afterEach block will execute afer every test case')
    })

    it('test case 1', () => {
        cy.log('i am in test case 1')
    })

    it('test case 2', () => {
        cy.log('i am in test case 2')
    })

    it('test case 3', () => {
        cy.log('i am in test case 3')
    })
})