//project.js//

import { Task } from "./task.js";

export class Project { 
    constructor(name,des,color) { 
        this.name = name;
        this.des = des;
        this.color = color;
        this.list = [];
    }

    addTask (title,des,date,priority,reminder) {
        let newTask = new Task(title,des,date,priority,reminder);
        this.list.push(newTask);
    }
}



export const project = new Project();





