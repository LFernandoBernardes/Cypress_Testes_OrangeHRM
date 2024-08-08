class MyInfoPage {

    selectorList(){
        const selectors ={
            firstNameField: "[name='firstName']",
            middleNameField: "[name='middleName']",
            lastNameField: "[name='lastName']",
            genericField: ".oxd-input--active",
        //    dateField: "[placeholder='yyyy-dd-mm']",
            dateCloseButton: ".--close",
            genericComboBox: ".oxd-select-text--arrow",
            submitButton: "[type='submit']"
        }
    return selectors
}

   fillPersonalDetails(firstName, middleName, lastName) {
        cy.get(this.selectorList().firstNameField).clear().type(firstName)
        cy.get(this.selectorList().middleNameField).clear().type(middleName)
        cy.get(this.selectorList().lastNameField).clear().type(lastName)
   }
   
   fillEmployeeDetails(employeeId, otherId, drivesLincenseDate, expiryDate){
    //Employee Id
        cy.get(this.selectorList().genericField).eq(3).clear().type(employeeId)
    //Other Id
        cy.get(this.selectorList().genericField).eq(4).clear().type(otherId)
    // Drive´s License Number
        cy.get(this.selectorList().genericField).eq(5).clear().type(drivesLincenseDate)
    // License Expiry Date
        cy.get(this.selectorList().genericField).eq(7).clear().type('2025-03-07')
     //   cy.get(this.selectorList().dateField).clear().type('2025-03-07')
    //   cy.get(this.selectorList().dateField).eq(0).type(expiryDate)
        cy.get(this.selectorList().dateCloseButton).click()
   }

   fillStatus(){
    // Select Nationality
        cy.get(this.selectorList().genericComboBox).eq(0).click({force: true })
        cy.get(':nth-child(69) > span').click()
    // Select Marital Status
        cy.get(this.selectorList().genericComboBox).eq(1).click({force: true })
        cy.get('.oxd-select-dropdown > :nth-child(3)').click()  
   }

   saveFor(){
     cy.get(this.selectorList().submitButton).eq(0).click()
    cy.get('.oxd-text--toast-title').should('be.visible', "Success")
   }


}

export default MyInfoPage