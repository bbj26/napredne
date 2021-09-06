import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() sidebarEvent: EventEmitter<any> = new EventEmitter();

  constructor(private _authService: AuthService) { }

  ngOnInit(): void {
  }

  loggedIn(): boolean {
    return this._authService.loggedIn();
  }

  logoutUser() {
    this._authService.logoutUser();
  }

  toggleSidebar() {
    this.sidebarEvent.emit('toggle');
  }
}
