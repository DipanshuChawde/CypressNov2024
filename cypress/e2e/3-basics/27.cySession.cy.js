///  <reference types = "cypress" />
//before ,beforeEach,after,afterEach

describe('varify login page of OHRM with cy.session', () => {
    beforeEach(function () {
        //cy.OHRMlogin('Admin', 'admin123')

        cy.OhrmLoginBySession('Admin','admin123')
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
       // cy.visit('/web/index.php/dashboard/index') //baseUrl
    })

    it('test case1', () => {
        cy.get('.oxd-topbar-header-breadcrumb-module').should('have.text', 'Dashboard')
    })

    it('test case2', () => {
        cy.get('.oxd-topbar-header-breadcrumb-module').should('have.text', 'Dashboard')
    })

    it('test case3', () => {
        cy.get('.oxd-topbar-header-breadcrumb-module').should('have.text', 'Dashboard')
    })

    it('test case4', () => {
        cy.get('.oxd-topbar-header-breadcrumb-module').should('have.text', 'Dashboard')
    })

    it('test case5', () => {
        cy.get('.oxd-topbar-header-breadcrumb-module').should('have.text', 'Dashboard')
    })

    it('test case6', () => {
        cy.get('.oxd-topbar-header-breadcrumb-module').should('have.text', 'Dashboard')
    })
})