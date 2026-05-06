describe('Adicionando produto ao carrinho', () => {

    beforeEach(() => {
        cy.fixture('users').then((users) => {
            cy.login(users.standard_user.username, users.standard_user.password);
        })
    })

    it('Deve adicionar item ao carrinho', () => {
        cy.addProduct('backpack');
        cy.get('.shopping_cart_badge').should('have.text', '1')
    })

    it('Deve adicionar múltiplos itens', () => {
        cy.contains('span', 'Products')

        cy.addProduct('backpack'); // Utiliza o commands para personalizar a adição de produtos, diminuindo a repetição de código
        cy.get('.shopping_cart_badge').should('have.text', '1')

        cy.addProduct('bolt-t-shirt');
        cy.get('.shopping_cart_badge').should('have.text', '2')

        cy.addProduct('fleece-jacket');
        cy.get('.shopping_cart_badge').should('have.text', '3')
    })
})


describe('Removendo produto do carrinho', () => {

    beforeEach(() => {
        cy.fixture('users').then((users) => {
            cy.login(users.standard_user.username, users.standard_user.password);
        })
    })

    it('Deve remover um item do carrinho', () => {

        cy.contains('span', 'Products'); // Verifica se a página de produtos foi carregada

        cy.addProduct('backpack'); // Utiliza o commands para personalizar a adição de produtos, diminuindo a repetição de código
        cy.get('.shopping_cart_badge').should('have.text', '1'); // Verifica se o item foi adicionado ao carrinho pelo acrescimo do número no ícone do carrinho

        cy.get('#remove-sauce-labs-backpack').click(); // Clica no botão de remover o item do carrinho
        cy.get('.shopping_cart_badge').should('not.exist');// Verifica se o item foi removido do carrinho verificando a ausência do número no ícone do carrinho
    })
})
