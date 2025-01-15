import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { AddTaskFormComponent } from './add-task-form/add-task-form.component';
import { type NewTask } from '../interfaces/task';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-tasks',
  imports: [TaskComponent, AddTaskFormComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input({ required: true }) userData!: any;
  isTaskAddInitiated: boolean = false;

  constructor(private taskSvc: TaskService) {}

  get selectedUserTask() {
    return this.taskSvc.getUserTask(this.userData.id);
  }
  OnAddTask() {
    this.isTaskAddInitiated = true; //for opening the form
  }
  onCloseForm(cancel: any) {
    this.isTaskAddInitiated = cancel;
  }
}
