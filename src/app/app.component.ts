import { DUMMY_USERS } from './dummy-user';
import { Component, Output } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { TasksComponent } from './tasks/tasks.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'EasyTask';
  users = DUMMY_USERS;
  selectedUser!: any;
  OnrcvUser(event: string) {
    this.selectedUser = this.users.find((u) => u.id === event);
  }
}
