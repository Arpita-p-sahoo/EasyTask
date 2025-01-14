import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../interfaces/task';
import { CardComponent } from '../../shared/card/card.component';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-task',
  imports: [CardComponent, DatePipe],
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
