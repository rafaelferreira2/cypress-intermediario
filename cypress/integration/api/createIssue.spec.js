/// <reference types="Cypress" />
import { faker } from '@faker-js/faker';

describe('Criação de Issues', () => {
    it('Criação de Issue com sucesso', () => {
        const issue = {
            title: `issue-${faker.datatype.uuid()}`,
            description: faker.random.words(3),
            project: {
                name: `project-${faker.datatype.uuid()}`,
                description: faker.random.words(5)
            }
        }

        cy.api_createIssue(issue)
            .then(response => {
                expect(response.status).to.eql(201)
                expect(response.body.title).to.eql(issue.title)
                expect(response.body.description).to.eql(issue.description)
        })
    })
})
