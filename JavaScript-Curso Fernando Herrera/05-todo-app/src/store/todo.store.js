import { Todo } from "../todos/models/todo.model";

const Filters = {
    All: 'all',
    Completed: 'Completed',
    Pending: 'Pending'
}

const state = {
    todos: [
        new Todo ('Pieda del alma'),
        new Todo ('Pieda del infinito'),
        new Todo ('Pieda del tiempo'),
        ],
    filter: Filters.All
}

const initStore = () => {
    console.log(state)
    console.log('InitStore')
}

const loadStore = () => {
    throw new Error ('Not implemented')
}

const getTodos = (filter=Filters.All) => {
    throw new Error ('Not implemented')
}

/**
 * 
 * @param {String} description 
 */
const addTodo = (description) => {
    throw new Error ('Not implemented')
}
/**
 * 
 * @param {String} todoId 
 */
const toggleTodo = (todoId) => {
    throw new Error ('Not implemented')
}
/**
 * 
 * @param {String} todoId 
 */
const deleteTodo = (todoId) => {
    throw new Error ('Not implemented')
}

const deleteCompleted = () => {
    throw new Error ('Not implemented')
}

const setFilter = (newFilter = Filters.All) => {
    throw new Error ('Not implemented')
}

const getCurrentFilter = ()=>{
    throw new Error ('Not implemented')
}

export default {
    initStore,
    getTodos,
    loadStore,
    toggleTodo,
    deleteTodo,
    deleteCompleted,
    setFilter,
    getCurrentFilter,
}