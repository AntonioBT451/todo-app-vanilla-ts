// src/todos/app.ts
import todoStore, { Filters } from '../store/todo.store';
import html from './app.html?raw';
import { renderTodos } from './use-cases';

const ElementIds = {
    TodosList: '.todo-list',
    NewTodoInput: '#new-todo-input',
    ClearCompletedButton: '.clear-completed',
    TodoFilters: '.filter'
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

    // Referencias HTML
    const newDescriptionInput = document.querySelector(ElementIds.NewTodoInput);
    const todoListUl = document.querySelector(ElementIds.TodosList);
    const clearCompletedButton = document.querySelector(ElementIds.ClearCompletedButton);
    const todoFiltersLi = document.querySelectorAll(ElementIds.TodoFilters);

    // Listeners
    newDescriptionInput?.addEventListener('keyup', (event) => {
        const keyboardEvent = event as KeyboardEvent;

        if (keyboardEvent.key !== 'Enter') return;

        const target = keyboardEvent.target as HTMLInputElement;
        const description = target.value.trim();

        if (target.value.trim().length === 0) return;

        todoStore.addTodo(description);
        displayTodos();

        target.value = '';
    });

    todoListUl?.addEventListener('click', (event) => {
        const target = event.target as HTMLElement;

        if (!target) return;

        const todoElement = target.closest('[data-id]');
        const elementId = todoElement?.getAttribute('data-id');

        if (elementId) {
            todoStore.toggleTodo(elementId);
            displayTodos();
        }
    });

    todoListUl?.addEventListener('click', (event) => {
        const target = event.target as HTMLElement;

        if (!target) return;

        const destroyButton = target.closest('.destroy');

        if (!destroyButton) return;

        const todoElement = destroyButton.closest('[data-id]');
        const elementId = todoElement?.getAttribute('data-id');

        if (elementId) {
            todoStore.deleteTodo(elementId);
            displayTodos();
        }
    });

    clearCompletedButton?.addEventListener('click', () => {
        todoStore.deletedCompleted();
        displayTodos();
    });

    todoFiltersLi.forEach((filterElement) => {

        filterElement.addEventListener('click', (event) => {
            const target = event.target as HTMLElement;
            if (!target) return;

            todoFiltersLi.forEach(el => el.classList.remove('selected'));

            target.classList.add('selected');

            switch (target.textContent) {
                case 'Todos':
                    todoStore.setFilter(Filters.All);
                    break;

                case 'Pendientes':
                    todoStore.setFilter(Filters.Pending);
                    break;

                case 'Completados':
                    todoStore.setFilter(Filters.Complete);
                    break;
            }

            displayTodos();
        })

    })
}
