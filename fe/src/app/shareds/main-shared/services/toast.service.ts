import { Injectable } from '@angular/core';
import { ToastComponent } from '../components/toast/toast.component';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(
    private toastComponent: ToastComponent
  ) { }

  showToast(type: string, title: string, desc: string) {
    switch (type) {
      case "success":
        this.toastComponent.createToast(type, "fa-solid fa-circle-check", title, desc);
        break;
      case "error":
        this.toastComponent.createToast(type, "fa-solid fa-circle-exclamation", title, desc);
        break;
      case "warning":
        this.toastComponent.createToast(type, "fa-solid fa-triangle-exclamation", title, desc);
        break;
      case "info":
        this.toastComponent.createToast(type, "fa-solid fa-triangle-exclamation", title, desc);
        break;
    }
  }
}
