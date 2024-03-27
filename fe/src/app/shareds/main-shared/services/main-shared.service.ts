import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainSharedService {
  isHamburgerToggled: boolean = false;
  private themeSource = new BehaviorSubject('light');
  currentTheme = this.themeSource.asObservable();
  isDarkMode: boolean = false;

  constructor() { }

  changeTheme(theme: string) {
    this.themeSource.next(theme);
    this.isDarkMode = !this.isDarkMode;
    this.applyTheme(theme);
  }

  applyTheme(theme: string) {
    const themePrefix = theme === 'dark' ? '--dark' : '--light';
    const root = document.documentElement;

    root.style.setProperty('--primary-color', `var(${themePrefix}-primary-color)`);
    root.style.setProperty('--secondary-color', `var(${themePrefix}-secondary-color)`);
    root.style.setProperty('--current-border-color', `var(${themePrefix}-border-color)`);
    root.style.setProperty('--current-background-color', `var(${themePrefix}-background-color)`);
    root.style.setProperty('--current-text-color', `var(${themePrefix}-text-color)`);
    root.style.setProperty('--current-panel-color', `var(${themePrefix}-panel-color)`);
    root.style.setProperty('--current-level2-color', `var(${themePrefix}-level2-border-color)`);
    root.style.setProperty('--current-glass-color', `var(${themePrefix}-glass-blur)`);
    root.style.setProperty('--current-skeleton-color', `var(${themePrefix}-skeleton-color)`);
    root.style.setProperty('--current-scrollbar-color', `var(${themePrefix}-scrollbar-track)`);
    root.style.setProperty('--current-scrollbar-color', `var(${themePrefix}-scrollbar-thumb)`);
    root.style.setProperty('--overlay-color', `var(${themePrefix}-overlay-color)`);
    root.style.setProperty('--overlay-color-light', `var(${themePrefix}-overlay-color-light)`);
    root.style.setProperty('--level3-color', `var(${themePrefix}-level3-color)`);
    root.style.setProperty('--level2-color', `var(${themePrefix}-level2-color)`);
    root.style.setProperty('--level1-color', `var(${themePrefix}-level1-color)`);
  }
}
