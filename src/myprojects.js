import { Project } from "./projects.js";
import { Task } from "./task.js";

export class MyProjects {
    constructor(){
        this.projects = [];
    }
    
    addProject(name,des,color){ 
        let newProject = new Project(name,des,color); 
        this.projects.push(newProject);
    }

    
}

const myProjects = new MyProjects();
myProjects.addProject('Education','test desc','Blue');

console.log(myProjects.projects);


