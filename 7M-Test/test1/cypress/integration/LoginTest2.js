/// <reference types="cypress" />

it("ForgotPassword", () => {
  cy.visit("https://opensource-demo.orangehrmlive.com/index.php/auth/login");
  cy.get("#forgotPasswordLink > a").click();
  cy.get("#securityAuthentication_userName").type("Admin");
  cy.get("#btnSearchValues").click();
  cy.get("#btnCancel").click();
  //User Token is generated, To upload an new Password
});
