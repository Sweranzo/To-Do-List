import { addtask,addproject,taskContainer,projectContainer,projectNameInput,projectDescriptionInput,projectTitle,
projectDescription } from "./dom.js";
import {MyProjects, myProjects} from "./myprojects.js";


export class Display{

    constructor(){
        this.currentProject = null; 

    }

    showTask(project){ 
        taskContainer.textContent = '';
        project.list.forEach(task => { 
            const taskCard = document.createElement('div');
            taskCard.classList.add('task-card');
            const title = document.createElement('h3'); 
            title.textContent = `${task.title}`;
            const des = document.createElement('p');
            des.textContent = `${task.des}`;
            const date = document.createElement('p');
            date.textContent = `${task.date}`;
            const priority = document.createElement('p');
            priority.textContent = `${task.priority}`;
            const reminder = document.createElement('p');
            reminder.textContent = `${task.reminder}`;
            taskCard.append(title,des,date,priority,reminder);
            taskContainer.append(taskCard);
        })
    }

    showProjects(){
    projectContainer.textContent = '';

    myProjects.projects.forEach(project => {

    const projectItem = document.createElement("button");
    projectItem.classList.add("project-item");

    projectItem.style.backgroundColor = project.color;

    const projectName = document.createElement("h3");
    projectName.textContent = project.name;

    const projectDes = document.createElement("p");
    projectDes.textContent = project.des;

    projectItem.append(projectName,projectDes);

    projectItem.addEventListener("click", () => {
        this.currentProject = project;

        projectTitle.textContent = project.name;
        projectDescription.textContent = project.des;

        this.showTask(this.currentProject);
    });

    projectContainer.append(projectItem);

});
    }

}