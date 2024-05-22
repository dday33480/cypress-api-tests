describe("Update note", () => {

    it("User login", () => {
        cy.login()
    })

    it("Update note", () => {
        const authToken = {
            "x-auth-token": Cypress.env('token')
        }

        cy.request ({
            url: "https://practice.expandtesting.com/notes/api/notes/664de9e5553828014144d419",
            method: "PUT",
            headers: authToken,
            body: {
                "id": "664de9e5553828014144d419",
                "title": "First note modified",
                "description": "First note modified via PUT method",
                "completed": true,
                "category": "Home"
            }
        })

        .then((response) => {
            cy.log(JSON.stringify(response.body)),
            expect(response.status).to.eq(200)
        })
    })
})