class MenuPage {

    selectorList(){
        const selectors ={
            administradorButton: "[href='/web/index.php/admin/viewAdminModule']",
            pimButton: "[href='/web/index.php/pim/viewPimModule']",
            lincenseypermisosButton: "[href='/web/index.php/leave/viewLeaveModule']",
            timeButton: "[href='/web/index.php/time/viewTimeModule']",
            recruitimentButton: "[href='/web/index.php/recruitment/viewRecruitmentModule']",
            performanceButton: "[href='/web/index.php/performance/viewPerformanceModule']",
            myinfoButton: '[href="/web/index.php/pim/viewMyDetails"]',
            dashboardButton: " [href='/web/index.php/dashboard/index']", 
            directoryButton: "[href='/web/index.php/directory/viewDirectory']",
            maintenanceButton: "[href='/web/index.php/maintenance/viewMaintenanceModule']",
            claimButton: "[href='/web/index.php/claim/viewClaimModule']",
            buzzButton: "[href='/web/index.php/buzz/viewBuzz']"
        }
    return selectors
}
    accessAdmintrador(){
        cy.get(this.selectorList().administradorButton).click()
    }

    accessPim(){
        cy.get(this.selectorList().pimButton).click()
    }

    accessLincenseypermisos(){
        cy.get(this.selectorList().lincenseypermisosButton).click()
    }

    accessTime(){
        cy.get(this.selectorList().timeButton).click()
    }

    accessRecruitiment(){
        cy.get(this.selectorList().myinfoButton).click()
    }

    accessPerformance(){
        cy.get(this.selectorList().performanceButton).click()
    }

    accessMyinfo(){
        cy.get(this.selectorList().myinfoButton).click()
    }
   
    accessDashboard(){
        cy.get(this.selectorList().dashboardButton).click()
    }
   
    accessDirectory(){
        cy.get(this.selectorList().directoryButton).click()
    }
   
    accessMaintenance(){
        cy.get(this.selectorList().maintenanceButton).click()
    }
   
    accessClaim(){
        cy.get(this.selectorList().claimButton).click()
    }

    accessBuzz(){
        cy.get(this.selectorList().buzzButton).click()
    }
   

}

export default MenuPage