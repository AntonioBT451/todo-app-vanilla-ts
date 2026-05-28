// src/todos/use-cases/render-todos.ts
import type { Todo } from "../models/todo.model";
import { createTodoHtml } from "./create-todo-html";

let element: Element | null = null;

export const renderTodos = (elementId: string, todos: Todo[] = []) => {

    if (!element)
        element = document.querySelector(elementId);

    if (!element)
        throw new Error(`Elemento con id: ${elementId}, no encontrado`);

    element.innerHTML = '';

    todos.forEach((todo) => {
        element?.append(createTodoHtml(todo));
    });
}
