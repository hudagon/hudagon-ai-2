import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MainSharedService {
  isHamburgerToggled: boolean = false;

  constructor() { }
}
