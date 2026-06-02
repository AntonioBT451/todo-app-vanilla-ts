import { Todo } from "../todos/models/todo.model";

export const Filters = {
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
    console.log('Init Store');
    loadStore();
}

const loadStore = () => {
    const storedState = localStorage.getItem('state');

    if (!storedState) return;

    const { todos = [], filters = Filters.All } = JSON.parse(storedState);

    state.todos = todos;
    state.filters = filters;

}

const saveStateToLocalStorage = () => {
    localStorage.setItem('state', JSON.stringify(state));
}


const addTodo = (description: string) => {
    if (description.length === 0) throw new Error('Description is required');

    const newTodo = new Todo(description);
    state.todos.push(newTodo);

    saveStateToLocalStorage();
}

const toggleTodo = (todoId: string) => {
    state.todos.map((todo) => {
        if (todo.id === todoId) {
            todo.done = !todo.done;
        }
        return todo;
    });

    saveStateToLocalStorage();
}

const deleteTodo = (todoId: string) => {
    state.todos = state.todos.filter(todo => todo.id !== todoId);

    saveStateToLocalStorage();
}

const deletedCompleted = () => {
    state.todos = state.todos.filter(todo => !todo.done);

    saveStateToLocalStorage();
}

const getTodos = (filter: string = Filters.All): Todo[] => {
    switch (filter) {
        case Filters.All:
            return [...state.todos];

        case Filters.Pending:
            return state.todos.filter(todo => !todo.done);

        case Filters.Complete:
            return state.todos.filter(todo => todo.done);

        default:
            throw new Error(`Option ${filter} is not valid`);
    }
}


const setFilter = (newFilter: string = Filters.All) => {
    state.filters = newFilter;
}

const getCurrentFilter = (): string => {
    return state.filters;
}

export default {
    addTodo,
    deletedCompleted,
    deleteTodo,
    getCurrentFilter,
    getTodos,
    initStore,
    loadStore,
    setFilter,
    toggleTodo,
}