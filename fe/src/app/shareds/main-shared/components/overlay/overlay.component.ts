import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.css']
})
export class OverlayComponent implements OnInit, AfterViewInit {
  @Output() notifyToggleModal = new EventEmitter();
  @Input() z_index: string | undefined; 
  @Input() overlayType: string | undefined; 

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    if (this.z_index) {
      const overlay = document.getElementById('overlay');
      if (overlay) {
        overlay.style.zIndex = this.z_index;
      }
    }

    if (this.overlayType) {
      const overlay = document.getElementById('overlay');
      if (overlay) {
        const lightColor = getComputedStyle(document.documentElement)
                           .getPropertyValue(this.overlayType).trim();
        overlay.style.setProperty('--overlay-color', lightColor);
      }
    }
  }

  toggleModal() {
    this.notifyToggleModal.emit();
  }
}
