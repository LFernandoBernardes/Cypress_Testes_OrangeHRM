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

describe('Myinfo Orange HRM Test', () => {

    it('User Info Update - Success ', () => {
        loginPage.accessLoginPage()
        loginPage.loginWhithUser(userData.UserSuccess.username, userData.UserSuccess.password)
        dashboardPage.checkDashboardPage()
        menuPage.accessMyinfo()
        myInfoPage.fillPersonalDetails(chance.first({nationality: 'it'}), chance.last({nationality: 'fr'}), chance.last({nationality: 'jp'}))
        myInfoPage.fillEmployeeDetails(chance.prime(), chance.prime({min: 1, max: 20}),chance.natural(), '2025-06-11')
        myInfoPage.fillStatus()
        myInfoPage.saveFor()
      })

      it('User Info Update - Fail - without the field First Name ', () => {
        loginPage.accessLoginPage()
        loginPage.loginWhithUser(userData.UserSuccess.username, userData.UserSuccess.password)
        dashboardPage.checkDashboardPage()
        menuPage.accessMyinfo()
        myInfoPage.fillPersonalDetails(' ',  chance.last({nationality: 'fr'}), chance.last({nationality: 'jp'}))
        myInfoPage.fillEmployeeDetails(chance.prime(), chance.prime({min: 1, max: 20}),chance.natural(), '2025-06-11')
        myInfoPage.fillStatus()
        myInfoPage.saveInvalid()
       
      })

      it('User Info Update - Fail - without the field Last Name ', () => {
        loginPage.accessLoginPage()
        loginPage.loginWhithUser(userData.UserSuccess.username, userData.UserSuccess.password)
        dashboardPage.checkDashboardPage()
        menuPage.accessMyinfo()
        myInfoPage.fillPersonalDetails(chance.first({nationality: 'it'}) ,  chance.last({nationality: 'fr'}), ' ')
        myInfoPage.fillEmployeeDetails(chance.prime(), chance.prime({min: 1, max: 20}),chance.natural(), '2025-06-11')
        myInfoPage.fillStatus()
        myInfoPage.saveInvalid()
       
      })

})



