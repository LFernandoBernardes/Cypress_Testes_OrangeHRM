class dashboardPage {

    selectorList(){
        const selectors ={
            dashboardGrid: '.orangehrm-dashboard-grid' ,
        }
    return selectors
}

    checkDashboardPage(){
        cy.location('pathname').should('be.equal', '/web/index.php/dashboard/index')
        cy.get(this.selectorList().dashboardGrid).should('be.visible')
    }
}

export default dashboardPage