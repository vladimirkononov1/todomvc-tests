/// <reference types="cypress" />

export function navigate() {
    cy.visit('https://todomvc-app-for-testing.surge.sh/')
}

export function addTodo(todoText) {
    cy.get('.new-todo').click({force: true}).type(todoText + '{Enter}')
}

export function toggleTodo(todoIndex) {
    cy.get(`.todo-list li:nth-child(${todoIndex + 1}) .toggle`).click()
}

export function showAllTodos() {
    cy.contains('All').click()
}

export function showActivesOnly() {
    cy.contains('Active').click()
}

export function showCompletedOnly() {
    cy.contains('Completed').click()
}

export function clearCompleted() {
    cy.contains('Clear completed').click()
}