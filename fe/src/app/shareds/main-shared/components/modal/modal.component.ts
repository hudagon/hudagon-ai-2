import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  @Output() notifyToggleModal = new EventEmitter();

  handleToggleModal() {
    this.notifyToggleModal.emit();
  }
}
