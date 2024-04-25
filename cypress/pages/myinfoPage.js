class DashboardPage {

    selectorList(){
        const selectors ={
            dashboardGrid: '.orangehrm-dashboard-grid' ,
        }
    return selectors
}

    checkDashboardPage(){
        cy.location('pathname').should('be.equal', '/web/index.php/dashboard/index')
        cy.get(this.selectorsList().dashboardGrid).should('be.visible')
    }
}

export default DashboardPage