import { Task } from "./task.js";

export class Todos { 
    constructor() { 
        this.list = [];
    }

    addTask (title,des,date,priority,reminder) {
        let newTask = new Task(title,des,date,priority,reminder);
        this.list.push(newTask);
    }
}



export const toDos = new Todos();
toDos.addTask('test','test',12/20/2025,'test','test');

console.log(toDos.list);



