/// <reference types="cypress" />

describe('template spec', () => {

  beforeEach(() => {
    cy.login("fulano@qa.com", "teste")
  })

  it('Acessar', () => {
    cy.visit('front.serverest.dev/admin/home');
  })
})