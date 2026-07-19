//project.js//

import { Task } from "./task.js";

export class Project { 
    constructor(name,des,color) {
        this.id = crypto.randomUUID(); 
        this.name = name;
        this.des = des;
        this.color = color;
        this.list = [];
    }

    addTask (title,des,date,priority,reminder) {
        let newTask = new Task(title,des,date,priority,reminder);
        this.list.push(newTask);
    }

    removeTask (id) { 
        const index = this.list.findIndex(task => task.id === id);
        if (index !== -1 ){
            this.list.splice(index,1);
        }
    }
}



export const project = new Project();





