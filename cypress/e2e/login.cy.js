import userData from '../fixtures/user-data.json'

describe('Orange HRM Test', () => {

  const selectorsList ={
    usernameField: "[name='username']" ,
    passwordField: "[name='password']" ,
    loginButton: "[type='submit']" ,
    sectionTitleTopBar: ".oxd-topbar-header-breadcrumb-module" ,
    dashboardGrid: '.orangehrm-dashboard-grid' ,
    wrongCredentialAlert: ".oxd-alert"
  }


  it('Login Sucess ', () => {
    cy.visit('/auth/login')
    cy.title().should('be.equal', "OrangeHRM")
    cy.get(selectorsList.usernameField).type(userData.UserSuccess.username)
    cy.get(selectorsList.passwordField).type(userData.UserSuccess.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.dashboardGrid)
    cy.location('pathname').should('be.equal', '/web/index.php/dashboard/index')
  })

  it('Login Fail ', () => {
    cy.visit('/auth/login')
    cy.title().should('be.equal', "OrangeHRM")
    cy.get(selectorsList.usernameField).type(userData.UserFail.username)
    cy.get(selectorsList.passwordField).type(userData.UserFail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialAlert)
    
  })

})