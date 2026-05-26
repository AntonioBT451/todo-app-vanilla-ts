// src/todos/models/todo.model.ts
import { v4 as uuid } from 'uuid'

export class Todo {
    public id: string;
    public description: string;
    public done: boolean;
    public createdAt: Date;

    constructor(
        description: string,
    ) {
        this.id = uuid();
        this.description = description;
        this.done = false;
        this.createdAt = new Date();
    }
}