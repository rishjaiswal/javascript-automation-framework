/// <reference types="cypress" />

describe('Amazon Test', () => {
    it('Amazon URL OPEN!', () => {
      cy.visit("www.amazon.in")
      expect(true).to.equal(true)
    })
  })