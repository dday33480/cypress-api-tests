describe("Get notes", () => {

    it("User login", () => {
        cy.login()
        })


    it("Get all notes", () => {
        const authToken = {
            "x-auth-token" : Cypress.env('token')
        };
        cy.request({
            url: "https://practice.expandtesting.com/notes/api/notes",
            method: "GET",
            headers: authToken
        })
        .then( (response) => {
            cy.log(JSON.stringify(response)),
            expect(response.status).to.eq(200)
        })
    })
})
