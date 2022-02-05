
describe('Ingreso a la tienda, busco un producto y lo agrego a la wishlist', ()=> {
    let testData;
    let testData2search;

    before(function(){
        cy.visit('https://automationstore.onlineweb.shop/')

        cy.fixture('fixtures-data/data_to_signin')
        .then(dataJson => {
            testData = dataJson
            return testData
        })

        cy.fixture('fixtures-data/product_data')
        .then(dataJson2search => {
            testData2search = dataJson2search
            return testData2search
        })
    })

    it('Sign in, completo email y contraseña',()=>{
        cy.signin(testData.email,testData.password)
    })

    it('Agregar producto a una wishlist', () =>{
        cy.wait(3000)
        // Back to store
        cy.xpath(`//*[@id="aspnetForm"]/main/div/div[1]/a[1]`).click()
        cy.wait(3000)
        // click en la barra de busqueda
        cy.xpath(`//*[@id="search_toggle_button"]/i`).click()
        // encuentro la barra de busqueda y escribo la busqueda
        cy.get('#txtQuickSearch').type(testData2search.product)
        // click en la lupa
        cy.xpath(`//*[@id="header2_inner"]/form/div/div/button/i`).click()
        cy.wait(3000)
        // encuentro el producto y hago click
        cy.xpath(`//*[@id="browse_products_container"]/article/div/div[1]/a`).click()
        // lo agrego a la wishlist
        cy.xpath(`//*[@id="wishlist_not_logged_in_html"]/a/strong`).click()
        cy.wait(2000)
        // me vuelvo a loguear porque se pierde la sesion
        cy.login(testData.email,testData.password)
        cy.wait(4000)
        // controlo que se haya agregado a la wishlist
        cy.contains('Remove From Wishlist')
    })
})
