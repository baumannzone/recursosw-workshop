// https://docs.cypress.io/api/introduction/api.html

describe('My First Test', () => {
  it.skip('Visits the app root url', () => {
    cy.visit('/')
    cy.contains('h1', 'Welcome to Your Vue.js App')
  })
})

describe('My Second Test', () => {
  it('Visits the app root url', () => {
    cy.visit('/')
    cy.contains('h1', 'Welcome to Vuetify')

    cy.get('.v-toolbar__items > .v-btn > .v-btn__content').click()

    cy.get('form .login-btn').click({force: true})
  })
})
