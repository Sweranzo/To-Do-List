import "./style.css";

import { MyProjects,myProjects } from "./myprojects.js";
import { addProjectBtn,taskDialog,projectDialog,projectContainer,saveTaskBtn,
cancelTaskBtn,saveProjectBtn,projectNameInput,projectDescriptionInput,projectColorInput,cancelProjectBtn,
addTaskBtn,titleInput,descriptionInput,dueDateInput,priorityInput,reminderInput} from "./dom.js";
import { Display } from "./display.js";
import { project } from "./project.js";


const display = new Display();
display.showProjects();


console.log(projectDescriptionInput);

addProjectBtn.addEventListener('click', () => {
    projectDialog.showModal();
})

cancelProjectBtn.addEventListener('click', () => {
    projectDialog.close();
})

saveProjectBtn.addEventListener('click', (e) => {
    e.preventDefault();
    myProjects.addProject(projectNameInput.value,projectDescriptionInput.value,projectColorInput.value);
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
    display.showTask(display.currentProject);
    taskDialog.close();
})






