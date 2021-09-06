import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Final Project';
  opened: boolean = false;

  toggleSidebar() {
    this.opened = !this.opened;
  }
}


