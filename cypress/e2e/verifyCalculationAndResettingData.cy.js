describe('End-to-End Test: Verify Calculation and Resetting Data', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it('Should calculate the correct total cost based on user input', () => {

        cy.get('[data-test="continue-button"]').click();

        cy.get('[data-test="question1-input"]').clear().type('90000');
        cy.get('[data-test="continue1-button"]').click();

        cy.get('[data-test="question2-input"]').clear().type('1800');
        cy.get('[data-test="continue2-button"]').click();

        cy.get('[data-test="question3-input"]').clear().type('45');
        cy.get('[data-test="continue3-button"]').click();

        cy.url().should('include', '/dashboard');
        cy.contains('Total Process Costs (year): £').should('exist');
    });

    it('Should reset all data when clicking "Restart" on the ThankYou page', () => {
        cy.get('[data-test="continue-button"]').click();
        cy.get('[data-test="question1-input"]').clear().type('120000');
        cy.get('[data-test="continue1-button"]').click();
        cy.get('[data-test="question2-input"]').clear().type('2000');
        cy.get('[data-test="continue2-button"]').click();
        cy.get('[data-test="question3-input"]').clear().type('50');
        cy.get('[data-test="continue3-button"]').click();

        cy.contains('Send me this report').click();
        cy.url().should('include', '/thank-you');

        cy.contains('Restart').click();
        cy.url().should('include', '/');

        cy.get('[data-test="continue-button"]').click();
        cy.get('[data-test="question1-input"]').should('have.value', '50000');
    });
});