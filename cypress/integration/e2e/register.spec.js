
describe('Ingreso a la tienda y me registro con un mail valido', ()=> {
    let testData;

    before(function(){
        cy.visit('https://automationstore.onlineweb.shop/')

        cy.fixture('fixtures-data/data_to_signin')
        .then(dataJson => {
            testData = dataJson
            return testData
        })
    })

    it('Click en sign in',()=>{
        cy.wait(4000)
        cy.get('span').contains('Sign In').click()
    })

    it('Completo email, checkbox y contraseña',()=>{
        cy.get('#account_login_register_email').type(testData.newEmail)
        cy.get('span').contains('Create an account').click()
        cy.get('#account_login_register_register_password').type(testData.password)
        cy.get('#account_login_register_button_register').click()
        cy.wait(3000)
    })

    it('Completo los datos requeridos del formulario', () =>{
        cy.get('#account_address_fname').type(testData.firstname)
        cy.get('#account_address_lname').type(testData.lastname)
        cy.get('#account_address_address1').type(testData.address)
        cy.get('#account_address_city').type(testData.city)
        cy.get('#shipping_county').type(testData.county)
        cy.get('#shipping_postcode').type(testData.postcode)
        cy.get('#account_address_telephone').type(testData.telephone)
        cy.get('#add_address_button').click()
        cy.wait(3000)
        cy.contains('Welcome to your account. Use the menu below to navigate around your account, view your orders, update your address or send us a message.')
    })
})
