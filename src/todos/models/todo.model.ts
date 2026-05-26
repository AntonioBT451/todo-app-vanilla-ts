// src/todos/models/todo.model.ts

export class Todo {
    public id: number;
    public description: string;
    public done: boolean;
    public createdAt: Date;

    constructor(
        id: number,
        description: string,
    ) {
        this.id = id;
        this.description = description;
        this.done = false;
        this.createdAt = new Date();
    }
}