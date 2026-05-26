import { Todo } from "../todos/models/todo.model";

const Filters = {
    All: 'All',
    Complete: 'Complete',
    Pending: 'Pending',
}

const state = {
    todos: [
        new Todo('Piedra del alma'),
        new Todo('Piedra del infinito'),
        new Todo('Piedra del tiempo'),
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