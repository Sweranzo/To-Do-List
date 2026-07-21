import "./style.css";

import { myProjects } from "./myprojects.js";
import {
  addProjectBtn,
  taskDialog,
  projectDialog,
  saveTaskBtn,
  cancelTaskBtn,
  saveProjectBtn,
  projectNameInput,
  projectDescriptionInput,
  projectColorInput,
  cancelProjectBtn,
  addTaskBtn,
  titleInput,
  descriptionInput,
  dueDateInput,
  priorityInput,
  taskForm,
  projectForm,
  projectPara,
} from "./dom.js";
import { Display } from "./display.js";
import { saveData, loadData } from "./storage.js";

const display = new Display();
myProjects.projects = loadData();
console.log(myProjects.projects);
display.showProjects();
display.render();

addProjectBtn.addEventListener("click", () => {
  display.mode = "add";
  display.editingProject = null;
  projectPara.textContent = "Add Project";
  projectDialog.showModal();
  projectForm.reset();
  display.showProjects();
});

cancelProjectBtn.addEventListener("click", () => {
  projectDialog.close();
});

saveProjectBtn.addEventListener("click", (e) => {
  e.preventDefault();

  if (display.mode === "add") {
    myProjects.addProject(
      projectNameInput.value,
      projectDescriptionInput.value,
      projectColorInput.value,
    );
  } else {
    display.editingProject.name = projectNameInput.value;
    display.editingProject.des = projectDescriptionInput.value;
    display.editingProject.color = projectColorInput.value;

    saveData();
  }

  projectForm.reset();
  display.showProjects();
  projectDialog.close();
});

addTaskBtn.addEventListener("click", () => {
  display.mode = "add";
  taskDialog.showModal();
});

saveTaskBtn.addEventListener("click", (e) => {
  e.preventDefault();

  if (!display.currentProject) {
    alert("Please select a project first.");
    return;
  }

  if (display.mode === "add") {
    display.currentProject.addTask(
      titleInput.value,
      descriptionInput.value,
      dueDateInput.value,
      priorityInput.value,
    );
  } else {
    display.editingTask.title = titleInput.value;
    display.editingTask.des = descriptionInput.value;
    display.editingTask.date = dueDateInput.value;
    display.editingTask.priority = priorityInput.value;

    saveData();
  }

  taskForm.reset();
  display.showTask(display.currentProject);
  taskDialog.close();
});

cancelTaskBtn.addEventListener("click", () => {
  taskDialog.close();
});
