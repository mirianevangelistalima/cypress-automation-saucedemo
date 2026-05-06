Cypress.Commands.add('login', (username, password) => {
  cy.fixture('users').then((users) => {
    cy.visit('https://www.saucedemo.com/')
    cy.get('#user-name').type(username)
    cy.get('#password').type(password)
    cy.get('#login-button').click()
  })
})

Cypress.Commands.add('addProduct', (productName) => { // parametrização de produtos, para diminuir repetição de código
  cy.get(`#add-to-cart-sauce-labs-${productName}`).click()
})