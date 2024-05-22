describe("Post a new note", () => {

    it("Create new user", () => {
        cy.fixture('userData').then(userFixture => {
            cy.request({
                url: "https://practice.expandtesting.com/notes/api/users/register",
                method: "POST",
                body: userFixture
            })
        })
        .then( (response) => {
            expect(response.status).to.eq(201)
        })
    })

    it("User login", () => {
        cy.login()
    })

    it('Create new note - Success', () => {
        const authToken = {
            "x-auth-token" : Cypress.env('token')
        };

            cy.request({
                url: 'https://practice.expandtesting.com/notes/api/notes',
                method: 'POST',
                headers: authToken,
                body: {
                    "title": "First note",
                    "description": "First note added to Personal",
                    "category": "Personal"
                }
                })

                .then( (response)  => {
                    expect(response.status).to.eq(200),
                    expect(response.body.title).not.eq(""),
                    cy.log(JSON.stringify(response))
                    })
            })

        it('Create new note - Failure', () => {
            const authToken = {
                "x-auth-token" : Cypress.env('token')
            };
    
            cy.request({
                url: 'https://practice.expandtesting.com/notes/api/notes',
                method: 'POST',
                headers: authToken,
                body: {
                    "date": "01/02/2024"
                    }
                })
    
                .then( (response)  => {
                    expect(response.status).to.eq(400)
                    })
            })
})

