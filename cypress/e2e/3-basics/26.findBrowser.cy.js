/// <reference types='cypress' />
describe('find browser in which teste case is running', () => {
    it('find browser', () => {
        cy.visit('https://www.webdriveruniversity.com/Actions/index.html')
        cy.log(`Running in ${Cypress.browser.name}`)
        cy.log(`Running in ${Cypress.browser.family}`)
        cy.log(`Running in ${Cypress.browser.version}`)
        cy.log(`Running in ${Cypress.browser.majorVersion}`)

    })
})