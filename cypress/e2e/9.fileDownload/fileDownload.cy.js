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
      cy.verifyDownload('sample2.csv')
      cy.verifyDownload('.csv', { contains: true });
    })
})

//https://github.com/Xvier/cypress-downloadfile


//https://github.com/elaichenkov/cy-verify-downloads

// steps to download Plugin

// step1: run addCommands
// npm i -D cy-verify-downloads

// step2: Add this line to your project's cypress/support/e2e.js
// require('cy-verify-downloads').addCustomCommand();

// Then you need to add the following lines of code to your project's cypress.config.js:

// const { verifyDownloadTasks } = require('cy-verify-downloads'); //copy this to top 

// module.exports = defineConfig({
//   e2e: {
//     setupNodeEvents(on, config) {
//       on('task', verifyDownloadTasks); //only copy this to e2e: inside setupnode event
//     },
//   },
// });