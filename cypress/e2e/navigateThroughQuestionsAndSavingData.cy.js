describe('End-to-End Test: User Navigating Through Questions and Saving Data', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it('Should allow the user to input data and navigate between questions', () => {
        cy.get('[data-test="continue-button"]').click();

        cy.get('[data-test="question1-input"]').clear().type('100000');
        cy.get('[data-test="continue1-button"]').click();

        cy.get('[data-test="question2-input"]').clear().type('1500');
        cy.get('[data-test="continue2-button"]').click();

        cy.get('[data-test="question3-input"]').clear().type('40');
        cy.get('[data-test="continue3-button"]').click();

        cy.url().should('include', '/dashboard');

        cy.contains('Supplier & product').should('exist');
    });

    it('Should retain user inputs when navigating back to previous questions', () => {
        cy.get('[data-test="continue-button"]').click();

        cy.get('[data-test="question1-input"]').clear().type('75000');
        cy.get('[data-test="continue1-button"]').click();

        cy.get('[data-test="question2-input"]').clear().type('1400');
        cy.get('[data-test="continue2-button"]').click();

        cy.get('[data-test="question3-input"]').clear().type('35');

        cy.go('back');
        cy.get('[data-test="question2-input"]').should('have.value', '1400');

        cy.go('back');
        cy.get('[data-test="question1-input"]').should('have.value', '75000');
    });
});
