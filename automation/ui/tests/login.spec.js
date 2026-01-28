import { loginPage } from '../helpers/selectors';
import { userData } from '../helpers/test-data';

describe('User Login', () => {
  it('should login successfully with valid credentials', () => {
    cy.visit('/login');
    cy.get(loginPage.usernameField).type(userData.validUser);
    cy.get(loginPage.passwordField).type(userData.validPass);
    cy.get(loginPage.loginButton).click();
    cy.url().should('include', '/dashboard');
  });
});