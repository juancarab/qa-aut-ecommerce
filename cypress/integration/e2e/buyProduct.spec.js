
describe('Ingreso a la tienda, elijo un producto, lo agrego al carrito y lo compro', ()=> {
    let testData;
    let testData2buy;

    beforeEach(function(){
        cy.visit('https://automationstore.onlineweb.shop/')

        cy.fixture('fixtures-data/data_to_signin')
        .then(dataJson => {
            testData = dataJson
            return testData
        })

        cy.fixture('fixtures-data/product_data')
        .then(dataJson2buy => {
            testData2buy = dataJson2buy
            return testData2buy
        })
    })

    it('Login, Buscar producto, Agregarlo al carrito y Pagarlo',()=>{
        cy.signin(testData.email,testData.password)
        cy.wait(3000)
        // Back to store
        cy.xpath(`//*[@id="aspnetForm"]/main/div/div[1]/a[1]`).click()
        cy.wait(3000)
        // click en Store
        cy.xpath(`/html/body/header/div[2]/div/div/div[2]/div/div[1]/span`).invoke('show')
        cy.contains('Store').click({force:true})
        // click en Organic Vegetables
        cy.xpath(`//*[@id="header2_nav"]/div/div[2]/a[2]/span`).invoke('show')
        cy.contains('Organic Vegetables').click({force:true})
        // encuentro Lettuce
        cy.contains(testData2buy.product2buy)
        // click on Lettuce
        cy.xpath(`//*[@id="browse_products_container"]/article[2]/div/div[1]/a`).click()
        // click on flecha
        cy.xpath(`//*[@id="details_buy_quantity_buttons"]/button[1]/i`).click()
        cy.wait(3000)
        // click on boton add to cart
        cy.xpath(`//*[@id="details_buy_button"]/span`).click()
        // click on proceed to checkout
        cy.xpath(`//*[@id="softadd-feedback-success"]/p[1]/a/button`).click()
        cy.wait(4000)
        // controlo el titulo
        cy.get('#basket_title').contains('Your Cart')
        // controlo el producto
        cy.xpath(`//*[@id="rptBasketItems_ctl00_hlProduct"]/div`).contains(testData2buy.product2buy)
        // click on checkout
        cy.get('#basket_purchase_main').click()
        // click on select
        cy.xpath(`//*[@id="saved_address_list"]/div/div`).click()
        cy.wait(3000)
        // click on to continue payment
        cy.xpath(`//*[@id="btnConfirmShipping"]/input`).click()
        // click on para aceptar terminos y condiciones
        cy.xpath(`//*[@id="terms_acceptance"]/div[1]`).click()
        // click on para completar la orden
        cy.xpath(`//*[@id="paybyother_74jpMc"]/div[1]/div[1]/input`).click()
        cy.wait(4000)
        // chequeo que la orden se reciba
        cy.get('p').contains('Your order has been received')
    })
})
