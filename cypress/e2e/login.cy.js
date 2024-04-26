import userData from '../fixtures/user-data.json'
import LoginPage from '../pages/loginPage'
import DashboardPage from '../pages/dashboardPage'



const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()

describe('Orange HRM Test', () => {

  it('Login Sucess ', () => {
    loginPage.accessLoginPage()
    loginPage.loginWhithUser(userData.UserSuccess.username, userData.UserSuccess.password)
    dashboardPage.checkDashboardPage()
  })

  it('Login Fail ', () => {
    loginPage.accessLoginPage()
    loginPage.loginWhithUser(userData.UserFail.username, userData.UserFail.password)
    loginPage.checkAccessInvalid()
  })
})