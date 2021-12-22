/// <reference types="cypress" />

it("Login test", () => {
  cy.visit("https://opensource-demo.orangehrmlive.com/index.php/auth/login");
  cy.get("#txtUsername").type("Admin");
  cy.get("#txtPassword").type("admin123");
  cy.get("#btnLogin").click();
});
