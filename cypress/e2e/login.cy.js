describe('Orange HRM Test', () => {
  it('Login Sucess ', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.title().should('be.equal', "OrangeHRM")
    cy.get("[name='username']").type('Admin')
    cy.get("[name='password']").type('admin123')
    cy.get("[type='submit']").click()
    cy.get('.oxd-topbar-header-breadcrumb-module').should('be.visible', "Dashboard")
    cy.location('pathname').should('be.equal', '/web/index.php/dashboard/index')
  })

  it('Login Fail ', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.title().should('be.equal', "OrangeHRM")
    cy.get("[name='username']").type('Admin#@$@#')
    cy.get("[name='password']").type('admin123')
    cy.get("[type='submit']").click()
    cy.get('.oxd-alert')
    
  })

})