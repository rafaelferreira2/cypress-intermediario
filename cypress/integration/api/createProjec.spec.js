/// <reference types="Cypress" />
import { faker } from '@faker-js/faker';

describe('Criação de Projetos', () => {
    it('Criando projeto com sucesso', () => {
        const project = {
            name: `project-${faker.datatype.uuid()}`,
            description: faker.random.words(5)
        }

        cy.api_createProject(project)
            .then(response => {
                expect(response.status).to.eql(201)
                expect(response.body.name).to.eql(project.name)
                expect(response.body.description).to.eql(project.description)
        })
    })
})