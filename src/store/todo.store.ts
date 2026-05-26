import { Todo } from "../todos/models/todo.model";

const Filters = {
    All: 'All',
    Complete: 'Complete',
    Pending: 'Pending',
}

const state = {
    todos: [
        new Todo(1, 'Piedra del alma'),
        new Todo(2, 'Piedra del infinito'),
        new Todo(3, 'Piedra del tiempo'),
    ],
    filters: Filters.All,
}

const initStore = () => {
    console.log('InitStore');
    console.log(state);
}

export default {
    initStore,
}