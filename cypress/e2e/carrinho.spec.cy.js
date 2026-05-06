
describe('Carrinho', () => {

    beforeEach(() => {
        cy.fixture('users').then((users) => {
            cy.login(users.standard_user.username, users.standard_user.password)
        })
    })

    it('Deve adicionar item ao carrinho', () => {
        cy.get('#add-to-cart-sauce-labs-backpack').click()
        cy.get('.shopping_cart_badge').should('have.text', '1')
    })

    it('Deve finalizar compra', () => {
        // Adiciona um item ao carrinho
        cy.get('#add-to-cart-sauce-labs-backpack').click();
        cy.get('.shopping_cart_link').click();
        // Clica no botão de checkout
        cy.get('#checkout').click();
        
        // Preenche os campos de checkout
        cy.get('#first-name').type('Mirian');
        cy.get('#last-name').type('Lima');
        cy.get('#postal-code').type('11111-111');
        cy.get('#continue').click();
        
        cy.contains('Checkout: Overview')
        
        // finalizar compra
        
        cy.get('#finish').click();
        cy.contains('Thank you for your order!');
        cy.get('#back-to-products').click();
        cy.url('').should('include', '/inventory.html')
        
    })


})