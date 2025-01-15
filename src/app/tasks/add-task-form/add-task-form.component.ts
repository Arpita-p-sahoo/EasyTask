import { Component, EventEmitter, Output, inject, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type NewTask } from '../../interfaces/task';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-add-task-form',
  imports: [FormsModule],
  templateUrl: './add-task-form.component.html',
  styleUrl: './add-task-form.component.css',
})
export class AddTaskFormComponent {
  @Input({ required: true }) userid!: string;
  @Output() closeDilog = new EventEmitter<boolean>();
  title!: string;
  summary!: string;
  dueDate!: string;

  private taskSvc = inject(TaskService);
  OnCancelAddingTask() {
    this.closeDilog.emit(false);
  }
  OnSubmitTask() {
    this.taskSvc.AddTask(
      { title: this.title, summary: this.summary, date: this.dueDate },
      this.userid
    );
    this.closeDilog.emit(false);
  }
}
