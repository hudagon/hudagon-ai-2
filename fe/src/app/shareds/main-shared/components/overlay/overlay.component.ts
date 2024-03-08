import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.css']
})
export class OverlayComponent implements OnInit {
  @Output() notifyToggleModal = new EventEmitter();
  @Input() z_index: string | undefined; 

  ngOnInit(): void {
    if (this.z_index) {
      const overlay = document.getElementById('overlay');
      if (overlay) {
        overlay.style.zIndex = this.z_index;
      }
    }
  }

  toggleModal() {
    this.notifyToggleModal.emit();
  }
}
