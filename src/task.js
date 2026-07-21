


export class Task { 
    constructor(title,des,date,priority) {
        this.id = crypto.randomUUID();
        this.title = title;
        this.des = des; 
        this.date = date;
        this.priority = priority; 
        
    }
}