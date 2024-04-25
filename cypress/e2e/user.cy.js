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
        myInfoPage.fillPersonalDetails(chance.first(), chance.last(), chance.last())
        myInfoPage.fillEmployeeDetails('1535','666','5846','2025-10-10')
        myInfoPage.fillStatus()
        myInfoPage.saveFor()
      })
})


