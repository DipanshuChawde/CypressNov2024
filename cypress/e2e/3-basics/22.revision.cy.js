/// <reference types='cypress' />
describe('verify iFrame in cypress', () => {
    it('example 1', () => {
        cy.visit('https://www.webdriveruniversity.com/IFrame/index.html')
        cy.get('#frame').then(function($frame){
            cy.log($frame)
            let iFrameBody = $frame.contents().find('body')
            cy.wrap(iFrameBody).as('iframe')
            cy.get('@iframe').find('a[href="index.html"]').should('have.text','Home')


        })
        //cy.get('a[href="index.html"]').should('have.text','Home')
    })

    it('example 2', () => {
        cy.visit('https://www.webdriveruniversity.com/IFrame/index.html')
        cy.get('#frame').then(function(frame){
            cy.log(frame)
            let iFrameBody = frame[0].contentDocument.body
            cy.wrap(iFrameBody).as('iframe')
            cy.get('@iframe').find('a[href="index.html"]').should('have.text','Home')


        })
        //cy.get('a[href="index.html"]').should('have.text','Home')
    })

    it('example3',()=>{
        cy.visit('https://www.webdriveruniversity.com/IFrame/index.html')
        let iFrameBody = cy.get('#frame').its('0.contentDocument.body').then(cy.wrap)
        iFrameBody.find('a[href="index.html"]').should('have.text','Home')
    })

    it.only('example3',()=>{
        cy.visit('https://www.webdriveruniversity.com/IFrame/index.html')
        cy.getiFrameBody('#frame').find('a[href="index.html"]').should('have.text','Home')
    })
})
