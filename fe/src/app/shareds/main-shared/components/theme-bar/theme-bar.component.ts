import { Component, OnInit } from '@angular/core';
import { MainSharedService } from '../../services/main-shared.service';

@Component({
  selector: 'app-theme-bar',
  templateUrl: './theme-bar.component.html',
  styleUrls: ['./theme-bar.component.css']
})
export class ThemeBarComponent implements OnInit {

  constructor(
    private mainSharedService: MainSharedService
  ) {
  }

  ngOnInit(): void {
  }

  getThemeMode() {
    return this.mainSharedService.isDarkMode;
  }

  toggleTheme() {
    this.mainSharedService.changeTheme(this.getThemeMode() ? 'light' : 'dark');
  }
}
