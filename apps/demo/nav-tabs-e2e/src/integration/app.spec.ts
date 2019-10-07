import { getGreeting } from '../support/app.po';

describe('demo-nav-tabs', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to demo-nav-tabs!');
  });
});
