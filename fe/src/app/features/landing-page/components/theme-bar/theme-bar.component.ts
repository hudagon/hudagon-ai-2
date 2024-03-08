import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-theme-bar',
  templateUrl: './theme-bar.component.html',
  styleUrls: ['./theme-bar.component.css']
})
export class ThemeBarComponent {
  isDarkMode: boolean = false;
  isRunning: boolean = true;

  @Output() notifyToggleResume: EventEmitter<string> = new EventEmitter();
  @Output() notifyToggleTheme: EventEmitter<string> = new EventEmitter();

  toggleResume() {
    this.isRunning = !this.isRunning;
    this.notifyToggleResume.emit();
  }

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    this.notifyToggleTheme.emit();
  }
}
