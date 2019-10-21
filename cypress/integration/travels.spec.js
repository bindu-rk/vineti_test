describe("PHP Travels Test", () => {
  it("Visits the PHPTravels website", () => {
    cy.visit("https://phptravels.com/demo");
  });

  //Verify title: APPLICATION TEST DRIVE
  it("should have title 'APPLICATION TEST DRIVE' ", () => {
    cy.get(".text h2").should("contain.text", "Application Test Drive");
  });

  //Click on phptravels.net
  it("clicks the url 'phptravels.net'", () => {
    cy.contains("http://www.phptravels.net")
      .invoke("removeAttr", "target")
      .click();

    cy.url().should("include", "phptravels.net");
  });

  //Click on my account and login with credentials: user@phptravels.com/demouser
  it("click on Account and login", () => {
    cy.contains("My Account").click();
    cy.contains("Login").click();
    cy.get(".form-group")
      .find("[type='email']")
      .type("user@phptravels.com");

    cy.get(".form-group")
      .find("[type='password']")
      .type("demouser");

    cy.get("#loginfrm")
      .find("[type='submit']")
      .click();

    cy.url().should("include", "https://www.phptravels.net/account/");
  });

  //Click on invoice and verify page has "INVOICE" text
  it("clicks the invoice button and verify page has INVOICE text", () => {
    cy.contains("Invoice")
      .invoke("removeAttr", "target")
      .click();

    cy.url().should("include", "invoice");
  });
});
