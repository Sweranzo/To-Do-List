import { Project } from "./project.js";
import { Task } from "./task.js";

export class MyProjects {
    constructor(){
        this.projects = [];
    }
    
    addProject(name,des,color){ 
        let newProject = new Project(name,des,color); 
        console.log(newProject);
        this.projects.push(newProject);
    }

    
}

export const myProjects = new MyProjects();
myProjects.addProject('Education','test desc','Blue');
myProjects.addProject('Workout','Test','Color');




