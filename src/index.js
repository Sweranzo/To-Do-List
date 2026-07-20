import "./style.css";

import { MyProjects,myProjects } from "./myprojects.js";
import { addProjectBtn,taskDialog,projectDialog,projectContainer,saveTaskBtn,
cancelTaskBtn,saveProjectBtn,projectNameInput,projectDescriptionInput,projectColorInput,cancelProjectBtn,
addTaskBtn,titleInput,descriptionInput,dueDateInput,priorityInput,reminderInput,inboxProject,taskForm,
projectForm,projectPara} from "./dom.js";
import { Display } from "./display.js";
import { project } from "./project.js";


const display = new Display();
display.showProjects();
display.showBackground();

addProjectBtn.addEventListener('click', () => {

    display.mode = 'add';
    display.editingProject = null;
    projectPara.textContent = 'Add Project'
    projectDialog.showModal();
    projectForm.reset();
    display.showProjects();
})

cancelProjectBtn.addEventListener('click', () => {
    projectDialog.close();
})

saveProjectBtn.addEventListener('click', (e) => {
    e.preventDefault();

    if(display.mode === 'add'){ 
       myProjects.addProject(projectNameInput.value,projectDescriptionInput.value,projectColorInput.value);
    } else {
        display.editingProject.name = projectNameInput.value; 
        display.editingProject.des = projectDescriptionInput.value;
        display.editingProject.color = projectColorInput.value;
    }

    
    projectForm.reset();
    display.showProjects();
    projectDialog.close();
})

addTaskBtn.addEventListener('click', () => {
    taskDialog.showModal();
})

saveTaskBtn.addEventListener('click',(e) => {
    e.preventDefault();

    if (!display.currentProject) {
        alert("Please select a project first.");
        return;
    }

    display.currentProject.addTask(titleInput.value,descriptionInput.value,dueDateInput.value,priorityInput.value);
    taskForm.reset();
    display.showTask(display.currentProject);
    taskDialog.close();
})

cancelTaskBtn.addEventListener('click', () => {
    taskDialog.close();
})






