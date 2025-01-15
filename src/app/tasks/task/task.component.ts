import { Component, Input, inject } from '@angular/core';
import { Task } from '../../interfaces/task';
import { CardComponent } from '../../shared/card/card.component';
import { DatePipe } from '@angular/common';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-task',
  imports: [CardComponent, DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  @Input() task!: Task;
  private taskSvc = inject(TaskService);
  OnCompleteTask() {
    this.taskSvc.CompleteTask(this.task.id);
  }
}
