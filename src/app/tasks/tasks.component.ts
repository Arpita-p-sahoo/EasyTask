import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { AddTaskFormComponent } from './add-task-form/add-task-form.component';
import { type NewTask } from '../interfaces/task';

@Component({
  selector: 'app-tasks',
  imports: [TaskComponent, AddTaskFormComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input({ required: true }) userData!: any;
  isTaskAddInitiated: boolean = false;
  dummyTasks = [
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

  get selectedUserTask() {
    return this.dummyTasks.filter((task) => task.userId === this.userData.id);
  }

  OnCompleteTask(taskId: string) {
    this.dummyTasks = this.dummyTasks.filter((task) => task.id !== taskId);
  }

  OnAddTask() {
    this.isTaskAddInitiated = true;
  }

  OnCancelAddingTask(isCancelled: boolean) {
    this.isTaskAddInitiated = isCancelled;
  }

  OnRcvdNewTask(taskObj: NewTask) {
    this.dummyTasks.unshift({
      id: new Date().getTime().toString(),
      title: taskObj.title,
      summary: taskObj.summary,
      dueDate: taskObj.date,
      userId: this.userData.id,
    });
    this.isTaskAddInitiated = false;
  }
}
