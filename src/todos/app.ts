// src/todos/app.ts
import html from './app.html?raw';

export const App = (elementId: string) => {

    (() => {
        const app = document.createElement('div');
        app.innerHTML = html;

        const container = document.querySelector(elementId);

        if (container) {
            container.append(app);
        } else {
            console.error(`Elemento con id '${elementId}' no encontrado`);
        }
    })();

}
