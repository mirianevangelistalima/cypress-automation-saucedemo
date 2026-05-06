Cypress.Commands.add('login', (username, password) => {
  cy.fixture('users').then((users) => {
    cy.visit('https://www.saucedemo.com/')
    cy.get('#user-name').type(username)
    cy.get('#password').type(password)
    cy.get('#login-button').click()
  })
})