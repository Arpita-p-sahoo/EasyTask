import { Injectable } from '@angular/core';
import { NewTask, Task } from '../interfaces/task';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor() {
    const task = localStorage.getItem('tasks');
    if (task) {
      this.tasks = JSON.parse(task);
    }
  }

  private tasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary:
        'Learn all the basic and advanced features of Angular & how to apply them.',
      dueDate: '2025-12-31',
    },
    {
      id: 't2',
      userId: 'u3',
      title: 'Build first prototype',
      summary: 'Build a first prototype of the online shop website',
      dueDate: '2024-05-31',
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Prepare issue template',
      summary:
        'Prepare and describe an issue template which will help with project management',
      dueDate: '2024-06-15',
    },
  ];

  getUserTask = (userid: string) => {
    return this.tasks.filter((task: any) => task.userId == userid);
  };

  CompleteTask = (taskid: string) => {
    this.tasks = this.tasks.filter((task) => task.id !== taskid);
    this.SaveDataTolocalStorage();
  };

  AddTask = (taskObj: NewTask, userid: string) => {
    this.tasks.unshift({
      id: new Date().getTime().toString(),
      title: taskObj.title,
      summary: taskObj.summary,
      dueDate: taskObj.date,
      userId: userid,
    });
    this.SaveDataTolocalStorage();
  };

  SaveDataTolocalStorage() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}
