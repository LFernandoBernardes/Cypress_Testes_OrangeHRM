import userData from '../fixtures/user-data.json'
import LoginPage from '../pages/loginPage'
import dashboardPage from '../pages/dashboardPage'

const loginPage = new LoginPage()
const DashboardPage = new dashboardPage()

describe('Orange HRM Test', () => {

  const selectorsList ={
    usernameField: "[name='username']" ,
    passwordField: "[name='password']" ,
    loginButton: "[type='submit']" ,
    sectionTitleTopBar: ".oxd-topbar-header-breadcrumb-module" ,
    dashboardGrid: '.orangehrm-dashboard-grid' ,
    wrongCredentialAlert: ".oxd-alert",
    myinfoButton: '[href="/web/index.php/pim/viewMyDetails"]',
    firstNameField: "[name='firstName']",
    middleNameField: "[name='middleName']",
    lastNameField: "[name='lastName']",
    genericField: ".oxd-input--active",
    dateField: "[placeholder='yyyy-dd-mm']",
    dateCloseButton: ".--close",
    genericComboBox: ".oxd-select-text--arrow",
    submitButton: "[type='submit']"
  }

  it('dashboardPage', () => {
    loginPage.accessLoginPage()
    loginPage.loginWhithUser(userData.UserSuccess.username, userData.UserSuccess.password)
    DashboardPage.checkDashboardPage()
  })

  it('Preencher Campos Perfil ', () => {
    cy.visit('/auth/login')
    cy.title().should('be.equal', "OrangeHRM")
    cy.get(selectorsList.usernameField).type(userData.UserSuccess.username)
    cy.get(selectorsList.passwordField).type(userData.UserSuccess.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.dashboardGrid)
    cy.location('pathname').should('be.equal', '/web/index.php/dashboard/index')
    cy.get(selectorsList.myinfoButton).click()
    cy.get(selectorsList.firstNameField)
        .clear().type("Zenon")
    cy.get(selectorsList.middleNameField)
        .clear().type("Barriga")
    cy.get(selectorsList.lastNameField)
        .clear().type("e Pesado")
    //Nickname
    //cy.get(selectorsList.genericField).eq(3)
       // .clear().type("Seu Barriga")
    //Employee Id
    cy.get(selectorsList.genericField).eq(3)
        .clear().type("123456456")
    //Other Id
    cy.get(selectorsList.genericField).eq(4)
        .clear().type("5165865")
    // Drive´s License Number
    cy.get(selectorsList.genericField).eq(5)
        .clear().type("005465")
    // License Expiry Date
    cy.get(selectorsList.dateField).eq(0)
        .clear().type("2025-10-10")
            cy.get(selectorsList.dateCloseButton).click()
    // Select Nationality
    cy.get(selectorsList.genericComboBox).eq(0).click()
        cy.get(':nth-child(69) > span').click()
    // Select Marital Status
    cy.get(selectorsList.genericComboBox).eq(1).click()
        cy.get('.oxd-select-dropdown > :nth-child(3)').click()     
    // Button Save
    cy.get(selectorsList.submitButton).eq(0).click()
    cy.get('.oxd-text--toast-title').should('be.visible', "Success")

  })

})