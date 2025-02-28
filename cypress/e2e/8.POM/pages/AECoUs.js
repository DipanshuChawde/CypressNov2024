export default class myClass {
    selectors = {
        url: "https://automationexercise.com/contact_us",
        nameCss: '[data-qa="name"]',
        emailCss: '[data-qa="email"]',
        subjaectCss: '[data-qa="subject"]',
        messageCss: '[data-qa="message"]',
        fileUploadCss: '[name="upload_file"]',
        fileToBeUploadPath: 'C:/Users/tanis/Desktop/postmanGoRest.docx',
       
        submitBtnCss: '[data-qa="submit-button"]',
        //validation success
        alertOk: true,
        successCss: '[class="status alert alert-success"]',
        successMsg: 'Success! Your details have been submitted successfully.',

        alertcancle: false,
        


    }

    visitUrl() {
        cy.visit(this.selectors.url)
    }

    buttonClick(css) {
        cy.get(css).click()
    }
    buttonCkickWithAlertHandle(css, AcceptOrReject) {
        if (AcceptOrReject == true) {
            cy.on('window:confirm', function (text) {
                expect(text).to.eq('Press OK to proceed!')
                return AcceptOrReject
            });
            cy.get(css).click()
            cy.wait(2000)
            cy.get(this.selectors.successCss).should('have.text',this.selectors.successMsg)
        }
        else {
            cy.on('window:confirm', function (text) {
                expect(text).to.eq('Press OK to proceed!')
                return AcceptOrReject
            });
            cy.get(css).click()
            cy.wait(2000)
            cy.contains(this.selectors.successMsg).should('not.exist');
        }

    }
    fileUpload(css,filetoUpload){
        cy.get(css).selectFile(filetoUpload)
       
    }

    

formDataFill(el){
    cy.get(this.selectors.nameCss).type(el.name)
    cy.get(this.selectors.emailCss).type(el.email)
    cy.get(this.selectors.subjaectCss).type(el.subject)
    cy.get(this.selectors.messageCss).type(el.subject)
    this.fileUpload(this.selectors.fileUploadCss,this.selectors.fileToBeUploadPath)
   

}
}