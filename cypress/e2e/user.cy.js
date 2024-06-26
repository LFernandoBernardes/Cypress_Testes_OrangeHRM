import userData from '../fixtures/user-data.json'
import LoginPage from '../pages/loginPage'
import DashboardPage from '../pages/dashboardPage'
import MenuPage from '../pages/menuPage'
import MyInfoPage from '../pages/MyinfoPage'

Chance = require ('chance')

const chance = new Chance()
const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()
const myInfoPage = new MyInfoPage()

describe('Orange HRM Test', () => {

    it.only('Login Sucess ', () => {
        loginPage.accessLoginPage()
        loginPage.loginWhithUser(userData.UserSuccess.username, userData.UserSuccess.password)
        dashboardPage.checkDashboardPage()
        menuPage.accessMyinfo()
        myInfoPage.fillPersonalDetails(chance.first({nationality: 'it'}), chance.last({nationality: 'fr'}), chance.last({nationality: 'jp'}))
        myInfoPage.fillEmployeeDetails(chance.prime(), chance.prime({min: 1, max: 20}),chance.natural(), '2025-05-05')
        myInfoPage.fillStatus()
        myInfoPage.saveFor()
      })
})


