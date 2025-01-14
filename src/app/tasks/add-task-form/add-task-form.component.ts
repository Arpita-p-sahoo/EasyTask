import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type NewTask } from '../../interfaces/task';

@Component({
  selector: 'app-add-task-form',
  imports: [FormsModule],
  templateUrl: './add-task-form.component.html',
  styleUrl: './add-task-form.component.css',
})
export class AddTaskFormComponent {
  @Output() cancelAddingTask = new EventEmitter<boolean>();
  @Output() addTask = new EventEmitter<NewTask>();
  title!: string;
  summary!: string;
  dueDate!: string;
  OnCancelAddingTask() {
    this.cancelAddingTask.emit(false);
  }
  OnSubmitTask() {
    this.addTask.emit({
      title: this.title,
      summary: this.summary,
      date: this.dueDate,
    });
  }
}
