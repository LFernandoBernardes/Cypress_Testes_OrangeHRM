describe('Orange HRM Test', () => {

  const selectorsList ={
    usernameField: "[name='username']" ,
    passwordField: "[name='password']" ,
    loginButton: "[type='submit']" ,
    sectionTitleTopBar: ".oxd-topbar-header-breadcrumb-module" ,
    wrongCredentialAlert: ".oxd-alert"
  }

  it('Login Sucess ', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.title().should('be.equal', "OrangeHRM")
    cy.get(selectorsList.usernameField).type('Admin')
    cy.get(selectorsList.passwordField).type('admin123')
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.sectionTitleTopBar).should('be.visible', "Dashboard")
    cy.location('pathname').should('be.equal', '/web/index.php/dashboard/index')
  })

  it('Login Fail ', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.title().should('be.equal', "OrangeHRM")
    cy.get(selectorsList.usernameField).type('Admin#@$@#')
    cy.get(selectorsList.passwordField).type('admin123')
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialAlert)
    
  })

})