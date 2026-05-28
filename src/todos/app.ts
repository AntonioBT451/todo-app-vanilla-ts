// src/todos/app.ts
import todoStore from '../store/todo.store';
import html from './app.html?raw';
import { renderTodos } from './use-cases';

const ElementIds = {
    TodosList: '.todo-list',
}

export const App = (elementId: string) => {

    const displayTodos = () => {
        const todos = todoStore.getTodos(todoStore.getCurrentFilter());

        renderTodos(ElementIds.TodosList, todos);
    };

    (() => {
        const app = document.createElement('div');
        app.innerHTML = html;

        const container = document.querySelector(elementId);

        if (container) {
            container.append(app);
        } else {
            console.error(`Elemento con id '${elementId}' no encontrado`);
        }

        displayTodos();
    })();

}
