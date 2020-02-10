describe("Frontend test UI", () => {
  it("Nome dos participantes", () => {
    cy.visit("/");
    cy.contains("Bárbara Evans");
    cy.contains("Andressa Urach");
    cy.contains("Yudi Tamashiro");
    cy.contains("Gominho");
    cy.contains("Rita Cadillac");
  });

  it("Descrição dos participantes ", () => {
    cy.visit("/");
    cy.contains("Modelo e filha de Monique Evans");
    cy.contains("Personalidade da mídia");
    cy.contains("Apresentador e ídolo teen");
    cy.contains("Fofoqueiro de Plantão");
    cy.contains("Cracrete nº1");
  });
});
