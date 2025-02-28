/// <reference types ="cypress" />

describe("verify file read write", () => {
    it('verify file file read write', () => {
        let str1 = "dipanshu"
        let str2 = "chawde"
        //reading from file
        cy.readFile("cypress/e2e/10.readWriteFile/fileToRead.txt").then((data) => {
            cy.log(data)
        })

        //writing in file

        cy.writeFile('cypress/e2e/10.readWriteFile/fileToWrite.txt', str1)
        cy.readFile("cypress/e2e/10.readWriteFile/fileToWrite.txt").then((data) => {
            cy.log(data)
        })

        //----------

        cy.writeFile('cypress/e2e/10.readWriteFile/fileToWrite.txt', str2, { flag: 'a+' })
        cy.readFile("cypress/e2e/10.readWriteFile/fileToWrite.txt").then((data) => {
            cy.log(data)
        })
    })

    it.only("verify file file read write for flipkart", () => {
        cy.visit('https://www.flipkart.com/search?q=i%20phone&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off')
        cy.writeFile("cypress/e2e/10.readWriteFile/dataFromFlipkart.csv", `Name , Price \n`)
        cy.get('[class="yKfJKb row"]').each((el) => {
            let nameM = el.find('[class="KzDlHZ"]').text()
            let priceM = el.find('[class="Nx9bqj _4b5DiR"]').text().replace("₹", "").replaceAll(",", "")
            //cy.log(el.find('[class="Nx9bqj _4b5DiR"]').text().replace("₹","").replaceAll(",",""))
            //if (priceM <= 70000) { 
            cy.writeFile("cypress/e2e/10.readWriteFile/dataFromFlipkart.csv", `${nameM} , ${priceM} \n`, { flag: 'a+' })
       // }
        })
})
})