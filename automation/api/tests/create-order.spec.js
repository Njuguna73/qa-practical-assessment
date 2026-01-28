import { apiConfig } from '../helpers/api-client';

describe('Order Creation API', () => {
  it('should create a new order via POST request', () => {
    cy.request('POST', `${apiConfig.baseUrl}/orders`, {
      items: [{ id: 'prod_1', qty: 2 }]
    }).then((response) => {
      expect(response.status).to.eq(201); // 201 Created
      expect(response.body).to.have.property('orderId');
    });
  });
});