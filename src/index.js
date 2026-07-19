import "./style.css";

import { MyProjects,myProjects } from "./myprojects.js";
import { addProjectBtn,taskDialog,projectDialog,projectContainer,saveTaskBtn,
cancelTaskBtn,saveProjectBtn,projectNameInput,projectDescriptionInput,projectColorInput,cancelProjectBtn,
addTaskBtn,titleInput,descriptionInput,dueDateInput,priorityInput,reminderInput,inboxProject,taskForm,
projectForm} from "./dom.js";
import { Display } from "./display.js";
import { project } from "./project.js";


const display = new Display();
display.showProjects();


addProjectBtn.addEventListener('click', () => {
    projectDialog.showModal();
})

cancelProjectBtn.addEventListener('click', () => {
    projectDialog.close();
})

saveProjectBtn.addEventListener('click', (e) => {
    e.preventDefault();
    myProjects.addProject(projectNameInput.value,projectDescriptionInput.value,projectColorInput.value);
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

    display.currentProject.addTask(titleInput.value,descriptionInput.value,dueDateInput.value,priorityInput.value,reminderInput.checked);
    taskForm.reset();
    display.showTask(display.currentProject);
    taskDialog.close();
})

cancelTaskBtn.addEventListener('click', () => {
    taskDialog.close();
})






