/// <reference types="cypress" />

// import { 
//     navigate, 
//     addTodo, 
//     toggleTodo, 
//     showAllTodos, 
//     showActivesOnly, 
//     showCompletedOnly, 
//     clearCompleted } from "../page-objects/todo-page"

import * as todoPage from '../page-objects/todo-page'


describe('first practice test', () => {
    beforeEach(() => {
        todoPage.navigate()

        todoPage.addTodo('Do morning exercise!')
    })

    it('add second todos', () => {
        cy.log('Here is the first test')
        todoPage.addTodo('Second todo')
        todoPage.toggleTodo(0)

        todoPage.showActivesOnly()

        // showCompletedOnly()

        cy.get('label').should('contain', 'morning exercise')
        cy.get('label').should('not.be.checked')



    })
    it('show all todos', () => {
        todoPage.addTodo('First thing')
        todoPage.addTodo('Second thing')
        todoPage.addTodo('Third thing')
        todoPage.toggleTodo(0)
        todoPage.showAllTodos()

        cy.get('.completed > .view > .toggle').should('be.checked')

    })
    it('clear completed todos', () => {
        todoPage.addTodo('Second todo')
        todoPage.toggleTodo(0)
        todoPage.clearCompleted()

        cy.get('label').should('have.text', 'Do morning exercise!')
    })
})