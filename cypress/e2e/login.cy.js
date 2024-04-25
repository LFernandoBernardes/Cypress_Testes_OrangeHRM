import userData from '../fixtures/user-data.json'
import LoginPage from '../pages/loginPage'
import DashboardPage from '../pages/dashboardPage'
import MenuPage from '../pages/menuPage'


const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()

describe('Orange HRM Test', () => {

  it.only('Login Sucess ', () => {
    loginPage.accessLoginPage()
    loginPage.loginWhithUser(userData.UserSuccess.username, userData.UserSuccess.password)
    dashboardPage.checkDashboardPage()
    menuPage.accessMyinfo()

    // cy.visit('/auth/login')
    //cy.title().should('be.equal', "OrangeHRM")
  //  cy.get(selectorsList.usernameField).type(userData.UserSuccess.username)
    //cy.get(selectorsList.passwordField).type(userData.UserSuccess.password)
    //cy.get(selectorsList.loginButton).click()
    //cy.get(selectorsList.dashboardGrid)
    //cy.location('pathname').should('be.equal', '/web/index.php/dashboard/index')
  })

  it('Login Fail ', () => {
    loginPage.accessLoginPage()
    loginPage.loginWhithUser(userData.UserFail.username, userData.UserFail.password)
    // cy.visit('/auth/login')
    // cy.title().should('be.equal', "OrangeHRM")
    // cy.get(selectorsList.usernameField).type(userData.UserFail.username)
    // cy.get(selectorsList.passwordField).type(userData.UserFail.password)
    // cy.get(selectorsList.loginButton).click()
    // cy.get(selectorsList.wrongCredentialAlert)
    
  })

})