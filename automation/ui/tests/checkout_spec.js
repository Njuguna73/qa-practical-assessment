import { checkoutPage } from '../helpers/selectors';

describe('E-commerce Checkout Flow', () => {
  it('should complete payment and show receipt', () => {
    cy.visit('/cart');
    // Mocking the payment API to avoid external dependencies
    cy.intercept('POST', '/api/pay', { statusCode: 200, body: { status: 'PAID' } });

    cy.get(checkoutPage.payButton).click();
    cy.get(checkoutPage.statusLabel).should('contain', 'PAID');
    cy.get('#receipt-download').should('be.visible'); // Receipt generation check
  });
});