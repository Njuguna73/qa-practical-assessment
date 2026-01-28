describe('Payment Processing API', () => {
  it('should update order status to PAID after successful transaction', () => {
    cy.request('POST', '/api/payments/order_123', {
      method: 'card',
      amount: 50.00
    }).then((response) => {
      expect(response.body.status).to.eq('PAID'); // Status update check
    });
  });
});