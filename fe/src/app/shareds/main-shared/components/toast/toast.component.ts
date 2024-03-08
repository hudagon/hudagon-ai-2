import { Component } from '@angular/core';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.css']
})
export class ToastComponent {
  constructor() { }

  createToast(type: string, icon: string, title: string, text: string) {
    let newToast = `
      <div class="toast ${type}">
          <i class="${icon}"></i>
          <div class="content">
              <div class="title">${title}</div>
              <span>${text}</span>
          </div>
          <i class="hover-effect-yellow-bright fa-solid fa-xmark"></i>
      </div>`;
  
    const fragment = document.createRange().createContextualFragment(newToast);
    const toastWrapper = document.getElementById("toast-wrapper");
    if (toastWrapper) {
      const toast = fragment.querySelector('.toast') as HTMLElement;
      const xMarkIcon = toast?.querySelector('.fa-xmark');
      if (xMarkIcon) {
        xMarkIcon.addEventListener('click', () => {
          this.removeToast(toast);
        });
      }
      toastWrapper.appendChild(fragment);
      setTimeout(() => {
        if (toast) {
          toast.remove();
        }
      }, 5000);
    }
  }
  
  removeToast(toastElement: HTMLElement) {
    if (toastElement) {
      toastElement.remove();
    }
  }
}
