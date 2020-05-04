/// <reference types="Cypress" />
/*global cy */

describe("Testing Inputs For Form", function () {
  beforeEach(function () {
    cy.visit("http://localhost:3000/pizza");
  });

  it("Tests form Inputs", function () {
    cy.get("#instructions")
      .type(
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      )
      .should(
        "have.value",
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      );
    cy.get(":nth-child(1) > .form-check-input").check().should("be.checked");
    cy.get(":nth-child(6) > .form-check-input").check().should("be.checked");
    cy.get(":nth-child(4) > .form-check-input").check().should("be.checked");
    cy.get("#name")
      .type("Nathaniel Richards")
      .should("have.value", "Nathaniel Richards");
    cy.get(".form-submit").click();
  });
});
