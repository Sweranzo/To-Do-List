import { Project } from "./project.js";
import { saveData } from "./storage.js";

export class MyProjects {
  constructor() {
    this.projects = [];
    this.selectedId = null;
  }

  addProject(name, des, color) {
    let newProject = new Project(name, des, color);
    console.log(newProject);
    this.projects.push(newProject);
    saveData();
  }

  deleteProject(id) {
    const index = this.projects.findIndex((proj) => proj.id === id);

    if (index !== -1) {
      this.projects.splice(index, 1);
    }

    saveData();
  }

  selectedProjectId(id) {
    this.selectedId = id;
  }
}

export const myProjects = new MyProjects();
/* myProjects.addProject('Inbox','Personal Task','Yellow'); */
/*myProjects.addProject('Education','test desc','Blue');
myProjects.addProject('Workout','Test','red');


 */
