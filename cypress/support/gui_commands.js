/// <reference types="Cypress" />

Cypress.Commands.add('login', () => {
    cy.visit('users/sign_in')

    cy.get('[data-qa-selector="login_field"]').type(Cypress.env('user_name'), {delay: 0})
    cy.get('[data-qa-selector="password_field"]').type(Cypress.env('user_password'), {delay: 0})
    cy.get('[data-qa-selector="sign_in_button"]').click()
})

Cypress.Commands.add('logout', () => {
    cy.get('.qa-user-avatar').click()
    //cy.get('[data-qa-selector="sign_out_link"]').click()
    cy.contains('Sign out').click()
})

Cypress.Commands.add('gui_createProject', project => {
    cy.visit('/projects/new')

    cy.get('#project_name').type(project.name, {delay: 0})
    cy.get('#project_description').type(project.description, {delay: 0})
    cy.get('#project_initialize_with_readme').check()
    cy.contains('Create project').click()
})

Cypress.Commands.add('gui_createIssue', issue => {
    cy.visit(`${Cypress.config('baseUrl')}${Cypress.env('user_name')}/${issue.project.name}/issues/new`)

    cy.get('#issue_title').type(issue.title, {delay: 0})
    cy.get('#issue_description').type(issue.description, {delay: 0})
    cy.contains('Submit issue').click()
})

Cypress.Commands.add('gui_setLabelOnIssue', label => {
    cy.get('.qa-edit-link-labels').click()
    cy.contains(label.name).click()
    cy.get('body').click()
})

Cypress.Commands.add('gui_setMilestoneOnIssue', milestone => {
    cy.get('.block.milestone .edit-link').click()
    cy.contains(milestone.title).click()
})
