import { Component, OnInit, Input } from '@angular/core';
import { SwitchService } from '../services/switch.service';
interface Hamburguesas {
  id: number;
  title: string;
  picture: string;
}

@Component({
  selector: 'app-modal-producto',
  templateUrl: './modal-producto.component.html',
  styleUrl: './modal-producto.component.css',
})
export class ModalProductoComponent implements OnInit {
  @Input() Hamburguesa: Hamburguesas[] = [];
  @Input() position: number = 0;
  constructor(private modalSS: SwitchService) {}
  ngOnInit(): void {}

  closeModal() {
    this.modalSS.$modal.emit(false);
  }
}
