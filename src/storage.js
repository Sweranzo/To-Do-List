
import { myProjects } from "./myprojects.js";
import { Project, project } from "./project.js";
import { Task } from "./task.js";

const STORAGE_KEY =  "projects";



export function saveData(){
    const projects = JSON.stringify(myProjects.projects);
    localStorage.setItem(STORAGE_KEY, projects);
}

export function loadData() {
    const data = localStorage.getItem(STORAGE_KEY);

    if (data === null) {
        return [];
    }

    const objData = JSON.parse(data);

    const recreatedProjects = objData.map(obj => {
        const project = new Project(
            obj.name,
            obj.des,
            obj.color
        );

        // Restore the saved properties
        project.id = obj.id;
        project.list = obj.list;

        const recreatedTask = obj.list.map(tasks => {
            const task = new Task (
                tasks.title,
                tasks.des,
                tasks.date,
                tasks.priority
            )

                task.id = tasks.id;
                task.completed = tasks.completed;
                return task;
        })

        return project;
    });



    return recreatedProjects;
}