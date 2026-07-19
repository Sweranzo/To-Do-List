import { addtask,addproject,taskContainer,projectContainer,projectNameInput,projectDescriptionInput,projectTitle,
projectDescription,inboxProject,contentHeader, 
addTaskBtn,projectDialog,projectPara,
projectColorInput,saveProjectBtn} from "./dom.js";
import {MyProjects, myProjects} from "./myprojects.js";
import { project } from "./project.js";
import trashIcon from "./delete.png" 

export class Display{

    constructor(){
        this.currentProject = null; 
        this.mode = "add";
       this.editingProject = null; 

    }

    showTask(projects){ 
       
        taskContainer.textContent = '';
        projects.list.forEach(task => { 
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
            const deleteTask = document.createElement('button');
            deleteTask.textContent = 'remove'; 
            deleteTask.addEventListener('click', () => { 
                projects.removeTask(task.id);
                this.showTask(projects);
            })

            taskCard.append(title,des,date,priority,reminder,deleteTask);
            taskContainer.append(taskCard);
        })
    }

    showProjects(){
 
    addTaskBtn.style.display = 'none';
    projectContainer.textContent = '';
    

    myProjects.projects.forEach(project => {

    const projectItem = document.createElement("button");
    projectItem.classList.add("project-item");
    const projectName = document.createElement("p");
    projectName.textContent = project.name;


     if (project.id === myProjects.selectedId){
            projectItem.style.borderLeft = `4px solid ${project.color}`
             projectName.style.color = "gray";
             projectName.style.fontWeight = "bolder";
             projectName.style.fontSize = "larger";
            addTaskBtn.style.display = 'block';
        } else {
            projectItem.style.border = '';
        }
    
    const projectDes = document.createElement("p");
    projectDes.textContent = project.des;
    const editProject = document.createElement('button'); 
    editProject.textContent = 'edit'; 
    
    editProject.addEventListener('click', () => {
        this.mode = "edit";
        this.editingProject = project; 

        projectNameInput.value = project.name;
        projectDescriptionInput.value = project.des;
        projectColorInput.value = project.color;
        projectDialog.showModal();
    })
   
    projectItem.append(projectName,editProject);

    if(project.name !== "Inbox") {     
    const trash = document.createElement('img');
    trash.classList.add('trash-can');
    trash.src = trashIcon;

    trash.addEventListener('click', () => {
        const alertUser = confirm('do you want to delete this project?');
        if(alertUser){
            myProjects.deleteProject(project.id);
        }
        this.showProjects();
        
    })

    projectItem.append(trash);
    }
     

    projectItem.addEventListener("click", () => {
        this.currentProject = project;
        projectTitle.textContent = project.name;
        projectDescription.textContent = project.des;
        this.showTask(this.currentProject);
        this.showProjects(); 
    });

    projectItem.addEventListener('mouseenter', () => {
         myProjects.selectedProjectId(project.id);
        
    })

    projectContainer.append(projectItem);

});
    }

}