import { Task } from "./task.js";

export class Project {
    constructor(name,des,color,){
        this.id = crypto.randomUUID();
        this.name = name; 
        this.des = des; 
        this.color = color;
        this.tasks = [];
    }
}