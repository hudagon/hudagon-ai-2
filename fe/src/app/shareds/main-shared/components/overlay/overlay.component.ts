import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.css']
})
export class OverlayComponent implements OnInit, AfterViewInit {
  @Output() notifyToggleModal = new EventEmitter();
  @Input() z_index: string | undefined; 

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    if (this.z_index) {
      const overlay = document.getElementById('overlay');
      if (overlay) {
        overlay.style.zIndex = this.z_index;
        console.log(overlay.style.zIndex);
      }
    }
  }

  toggleModal() {
    console.log("vô 1");
    this.notifyToggleModal.emit();
  }
}
