/// <reference types ="cypress" />

describe("verify file download options",()=>{
    it('verify file download option 1',()=>{
  cy.visit("http://autopract.com/selenium/download.html")
  cy.contains('Download File').click()
  cy.readFile("cypress/downloads/sample2.csv",{timeout: 60000}).should("contain","Eldon Base for stackable")
    })

    it.only("verify file download options 2",()=>{
      // cy.visit("http://autopract.com/selenium/download.html")
      // cy.contains('Download File').click()
      // cy.downloadFile('sample2.csv')
      cy.downloadFile('http://autopract.com/selenium/download.html','mydownloads','sample2.csv')
    })
})