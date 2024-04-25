class MenuPage {

    selectorList(){
        const selectors ={
            myinfoButton: '[href="/web/index.php/pim/viewMyDetails"]',
        }
    return selectors
}

    accessMyinfo(){
        cy.get(this.selectorList().myinfoButton).click()
    }
   
}

export default MenuPage