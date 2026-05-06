describe('Adicionando produto ao carrinho', () => {

    beforeEach(() => {
        cy.fixture('users').then((users) => {
            cy.login(users.standard_user.username, users.standard_user.password)
        })
    })

    it('Deve adicionar item ao carrinho', () => {
        cy.get('#add-to-cart-sauce-labs-backpack').click()
        cy.get('.shopping_cart_badge').should('have.text', '1')
    })

    it('Deve adicionar múltiplos itens', () => {
        cy.contains('span', 'Products')

        cy.get('#add-to-cart-sauce-labs-bike-light').click()
        cy.get('.shopping_cart_badge').should('have.text', '1')

        cy.get('#add-to-cart-sauce-labs-bolt-t-shirt').click()
        cy.get('.shopping_cart_badge').should('have.text', '2')

        cy.get('#add-to-cart-sauce-labs-fleece-jacket').click()
        cy.get('.shopping_cart_badge').should('have.text', '3')
    })
})


describe('Removendo produto do carrinho', () => {

    beforeEach(() => {
        cy.fixture('users').then((users) => {
            cy.login(users.standard_user.username, users.standard_user.password)
        })
    })

    it('Deve remover um item do carrinho', () => {

        cy.contains('span', 'Products') // Verifica se a página de produtos foi carregada

        cy.get('#add-to-cart-sauce-labs-backpack').click()// Adiciona o item ao carrinho
        cy.get('.shopping_cart_badge').should('have.text', '1') // Verifica se o item foi adicionado ao carrinho pelo acrescimo do número no ícone do carrinho

        cy.get('#remove-sauce-labs-backpack').click() // Clica no botão de remover o item do carrinho
        cy.get('.shopping_cart_badge').should('not.exist')// Verifica se o item foi removido do carrinho verificando a ausência do número no ícone do carrinho
    })
})
