// src/todos/use-cases/render-pending.ts
import todoStore, { Filters } from "../../store/todo.store";

let element: Element | null = null;

export const renderPending = (elementId: string) => {
    if (!element)
        element = document.querySelector(elementId);

    if (!element)
        throw new Error(`Elemento con id: ${elementId}, no encontrado`);

    element.innerHTML = String(todoStore.getTodos(Filters.Pending).length);
}
