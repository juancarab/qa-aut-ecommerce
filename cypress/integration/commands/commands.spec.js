describe('Commands Example', function(){

    beforeEach(function(){
        cy.visit('https://automationstore.onlineweb.shop/')
    })

    beforeEach(function(){
        cy.get('#account_login_register_email').type(testData.email)
        cy.xpath(`//*[@id="account_login_register_which_login"]/span`).click()
        cy.get('#account_login_register_login_password').type(testData.password)
        cy.get('#account_login_register_button_login').click()
        cy.wait(3000)
    })
})