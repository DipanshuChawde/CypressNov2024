///<reference types = "cypress" /> 
describe("verify sate picker functionality in cypress",()=>{
    it("verify date picker for current and future date",()=>{
        let currentDate = new Date()
        cy.log(`current date is  ${currentDate}`)

        let todayDate =currentDate.getDate()
        cy.log(`current date is ${todayDate}`)

        let todayMonth = currentDate.getMonth()  //starts with 0 as jan
        cy.log(`current month is ${todayMonth + 1} `)

        let todayMonthNSh = currentDate.toLocaleString("default",{month : "short"})
        cy.log(`current month is ${todayMonthNSh} `)

        let todayMonthLong = currentDate.toLocaleString("default",{month : "long"})
        cy.log(`current month is ${todayMonthLong} `)

        //future date
        let dateF = new Date()

        dateF.setDate(dateF.getDate()+31)
        cy.log(`future date is ${dateF}`)

        let fDate =dateF.getDate()
        cy.log(`current date is ${fDate}`)

        let fMonth = dateF.getMonth()  //starts with 0 as jan
        cy.log(`current month is ${fMonth + 1} `)

        let fMonthNSh = dateF.toLocaleString("default",{month : "short"})
        cy.log(`current month is ${fMonthNSh} `)

        let fMonthLong = dateF.toLocaleString("default",{month : "long"})
        cy.log(`current month is ${fMonthLong} `)
    })

    it.only('verify future date functionality',()=>{

         //future date
         let dateF = new Date()

         dateF.setDate(dateF.getDate()+396) 
         cy.log(`future date is ${dateF}`)
 
         let fDate =dateF.getDate()
         cy.log(`future date is ${fDate}`)
 
         let fMonth = dateF.getMonth()  //starts with 0 as jan
         cy.log(`future month is ${fMonth + 1} `)
 
         let fMonthNSh = dateF.toLocaleString("default",{month : "short"})
         cy.log(`future month is ${fMonthNSh} `)
 
         let fMonthLong = dateF.toLocaleString("default",{month : "long"})
         cy.log(`future month is ${fMonthLong} `)

         let fyear = dateF.getFullYear()
         cy.log(`future year is ${fyear} `)

        cy.visit('https://www.webdriveruniversity.com/Datepicker/index.html')
        cy.get('.input-group-addon').click()

        


    })
})
