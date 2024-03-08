import { Component, Input } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-user-panel',
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.css']
})
export class UserPanelComponent {
  @Input() page: string = "";
  
  constructor(
    private authService: AuthService,
  ) {
  }

  logOut() {
    this.authService.logOut();
  }

  getUserFullName() {
    return this.authService.getUserFullName();
  }

  getUserAvatar() {
    return this.authService.getUserAvatar();
  }
}
