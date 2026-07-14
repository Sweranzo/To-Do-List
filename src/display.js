import { addtask,addproject,container } from "./dom.js";
import { MyProjects } from "./myprojects.js";
import { Todos, toDos } from "./todos.js";

export class Display { 

    showTask(){ 
        
        container.textContent = '';
        toDos.list.forEach(task => { 
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
            container.append(taskCard);
        })
    }
}