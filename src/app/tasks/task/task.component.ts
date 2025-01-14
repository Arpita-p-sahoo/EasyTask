import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../interfaces/task';

@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  @Input() task!: Task;
  @Output() complete = new EventEmitter<string>();

  OnCompleteTask() {
    this.complete.emit(this.task.id);
  }
}
