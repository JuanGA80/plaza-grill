import { Component, OnInit } from '@angular/core';
import { SwitchService } from '../services/switch.service';

@Component({
  selector: 'app-modal-producto',
  templateUrl: './modal-producto.component.html',
  styleUrl: './modal-producto.component.css',
})
export class ModalProductoComponent implements OnInit {
  constructor(private modalSS: SwitchService) {}
  ngOnInit(): void {}

  closeModal() {
    this.modalSS.$modal.emit(false);
  }
}
