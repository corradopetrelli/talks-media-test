context("Hello World Suite Test", () => {

    it("Some checks", function () {
        cy.visit("/");

        cy.contains('Hello Vue 3.0 + Vite');
    });
});
