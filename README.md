# Todo App

Task list application (Todo App) built with **Vite**, **TypeScript** and **Vanilla JS**. Inspired by TodoMVC design.

## Demo

[https://todo-app-vanillats.netlify.app/](https://todo-app-vanillats.netlify.app/)

## Features

- Add new tasks
- Mark tasks as completed
- Delete individual tasks
- Filter tasks (All / Pending / Completed)
- Pending tasks counter
- Delete all completed tasks at once
- localStorage persistence
- Responsive design
- TodoMVC inspired UI

## Technologies Used

| Technology | Purpose |
|------------|---------|
| **Vite** | Build tool and development server |
| **TypeScript** | Static typing and better development experience |
| **Vanilla JS** | No additional frameworks |
| **CSS3** | Styles and animations |
| **uuid** | Generate unique IDs for each task |
| **localStorage** | Data persistence in the browser |

## Installation and Usage

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn

### Steps to run locally

1. Clone the repository.

`git clone https://github.com/AntonioBT451/todo-app-vanilla-ts`

2. Enter the project directory

`cd todo-app-vanilla-ts`

3. Install dependencies

`npm install`

4. Run in development mode

`npm run dev`

5. Open the browser at the indicated port

## Available Commands

|Command |	Description |
|------------|-----------|
|`npm run dev` |	Starts the development server |
|`npm run build` |	Generates production build in the dist folder |
|`npm run preview` |	Previews the production build locally |

## Project Structure

```
src/
├── main.ts                 # Entry point
├── style.css               # Global styles
├── todos/
│   ├── app.ts              # Initialization and UI logic
│   ├── app.html            # Main HTML template
│   ├── models/
│   │   └── todo.model.ts   # Todo Class
│   ├── use-cases/          # Rendering functions
│   │   ├── index.ts
│   │   ├── render-todos.ts
│   │   ├── render-pending.ts
│   │   └── create-todo-html.ts
│   └── store/
│       └── todo.store.ts   # Global state and business logic
```

## Upcoming Improvements

- Edit existing tasks (double click)
- Mark all as complete (toggle-all)
- Animations when adding/deleting tasks
- Unit tests
- Dark mode