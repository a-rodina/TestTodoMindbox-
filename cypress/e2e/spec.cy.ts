describe('test todo', () => {
  it('delete all deletes', () => {
    cy.visit('http://localhost:3000/');
    cy.get('[data-testId="cypress-input"]').type("cleaning");
    cy.get('[data-testId="cypress-addBtn"]').click();
    cy.get('[data-testId="cypress-input"]').type("reading");
    cy.get('[data-testId="cypress-addBtn"]').click();
    cy.get('[data-testId="cypress-cardContainer"]');
    cy.get('[data-testId="cypress-deleteAllBtn"]').click();
    cy.get('[data-testId="cypress-cardContainer"]').should('not.exist');

  }), 
  it('todo is adding', () => {
    cy.visit('http://localhost:3000/');
    cy.get('[data-testId="cypress-input"]').type("cleaning");
    cy.get('[data-testId="cypress-addBtn"]').click();
    cy.get('[data-testId="cypress-cardContainer"]').children().children().first().should("have.text", "cleaning");
  }), 
  it('delete last deletes', () => {
    cy.visit('http://localhost:3000/');
    cy.get('[data-testId="cypress-input"]').type("cleaning");
    cy.get('[data-testId="cypress-addBtn"]').click();
    cy.get('[data-testId="cypress-input"]').type("reading");
    cy.get('[data-testId="cypress-addBtn"]').click();
    cy.get('[data-testId="cypress-cardContainer"]').children().should('have.length', 2)
    cy.get('[data-testId="cypress-deleteLastBtn"]').click();
    cy.get('[data-testId="cypress-cardContainer"]').children().should('have.length', 1);
  })
})