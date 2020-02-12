/// <reference types="Cypress" />
import tags from '../helpers/util'

describe('My First Test', () => {
  it('Visits the app root url', () => {
    cy.visit('/')
    cy.get(tags.home.logo).should('be.visible')
  })
})
