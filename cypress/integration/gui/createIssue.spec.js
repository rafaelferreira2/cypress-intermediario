/// <reference types="Cypress" />
import { faker } from '@faker-js/faker';

describe('Criação de Projetos', () => {
    const issue = {
        title: `issue-${faker.datatype.uuid()}`,
        description: faker.random.words(3),
        project: {
            name: `project-${faker.datatype.uuid()}`,
            description: faker.random.words(5)
        }
    }

    before(() => {
        cy.login()
        cy.api_createProject(issue.project)
    })

    it('Criação de Issue com sucesso', () => {
        cy.gui_createIssue(issue)

        cy.url().should('be.equal', `${Cypress.config('baseUrl')}${Cypress.env('user_name')}/${issue.project.name}/issues/1`)
        cy.get('.issue-details')
            .should('contain', issue.title)
            .and('contain', issue.description)
    })
})
