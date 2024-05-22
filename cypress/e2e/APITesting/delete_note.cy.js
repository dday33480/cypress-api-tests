describe("Delete note", () => {

    it("Login to account", () => {
        cy.login()
    })

    it("Delete note", () => {
        cy.delete("664de9c9553828014144d40d")
    })
})