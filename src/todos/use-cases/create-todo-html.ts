// src/todos/use-cases/create-todo-html.ts
import type { Todo } from "../models/todo.model";

export const createTodoHtml = (todo: Todo): HTMLLIElement => {

    const { id, done, description } = todo;

    const html = `
        <div class="view">
            <input class="toggle" type="checkbox" ${done ? 'checked' : ''}>
            <label>${description}</label>
            <button class="destroy"></button>
        </div>
        <input class="edit" value="Create a TodoMVC template">
    `;

    const liElement = document.createElement('li');

    if (done)
        liElement.classList.add('completed');

    liElement.setAttribute('data-id', id);
    liElement.innerHTML = html;

    return liElement;
}
