// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// Llamando a este comando desde cualquier test, se puede iniciar sesion
Cypress.Commands.add("signin", (email,password) =>{
        cy.xpath(`//*[@id="account"]/a/span`).click()
        cy.get('#account_login_register_email').type(email)
        cy.xpath(`//*[@id="account_login_register_which_login"]/span`).click()
        cy.get('#account_login_register_login_password').type(password)
        cy.get('#account_login_register_button_login').click()
        cy.wait(4000)
})

Cypress.Commands.add("login", (email,password) =>{
        cy.get('#account_login_register_email').type(email)
        cy.xpath(`//*[@id="account_login_register_which_login"]/span`).click()
        cy.get('#account_login_register_login_password').type(password)
        cy.get('#account_login_register_button_login').click()
        cy.wait(4000)
})
