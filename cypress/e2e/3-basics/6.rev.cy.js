/// <reference types ="cypress" />

describe('revision',()=>{

beforeEach(function(){
    cy.log('i m in before each')
})

afterEach(function(){
    cy.log('i m in after each')
})


    it('test case 1',()=>{
        //AAA

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
//                    un         pw
      cy.hrmCommand2('Admin','admin123')

        cy.get('.oxd-topbar-header-breadcrumb-module').should('have,text','Dashboard')

    })
})