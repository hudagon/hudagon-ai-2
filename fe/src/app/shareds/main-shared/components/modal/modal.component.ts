import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  @Output() notifyToggleModal = new EventEmitter();

  handleToggleModal() {
    console.log("vô 2");
    this.notifyToggleModal.emit();
  }
}
