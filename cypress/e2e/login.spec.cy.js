
describe('Login', () => {

  var vist = 'https://www.saucedemo.com/'

  it('Deve fazer login com Standard User', () => {
    cy.fixture('users').then((users) => {
      cy.login(users.standard_user.username, users.standard_user.password)
      cy.contains('span', 'Products')
    })
  })

  it('Deve fazer login com visual_user', () => {
    cy.fixture('users').then((users) => {
      cy.login(users.visual_user.username, users.visual_user.password)
      cy.get('#login-button').click()
      cy.contains('span', 'Products')
    })
  })

  it('Deve tentar login com credenciais vazias', () => {
    cy.visit(vist)

    cy.get('#login-button').click()
    cy.contains('Epic sadface: Username is required')
  })

  it('Deve tentar login com senha vazia', () => {
    cy.fixture('users').then((users) => {
      cy.login(users.standard_user.username, '')
      cy.get('#login-button').click()
      cy.contains('Epic sadface: Password is required')
    })

  })

   it('Deve tentar login com senha incorreta', () => {
      cy.get('#user-name').type('users.visual_user.username')
      cy.get('#password').type('12s')
      cy.get('#login-button').click()
      cy.contains('Epic sadface: Username and password do not match any user in this service')
    })

})

