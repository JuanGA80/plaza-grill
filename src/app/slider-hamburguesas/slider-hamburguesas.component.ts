import { Component, OnInit } from '@angular/core';
import { SwitchService } from '../services/switch.service';

@Component({
  selector: 'app-slider-hamburguesas',
  templateUrl: './slider-hamburguesas.component.html',
  styleUrl: './slider-hamburguesas.component.css',
})
export class SliderHamburguesasComponent implements OnInit {
  modalSwitch = false;
  constructor(private modalSS: SwitchService) {}

  ngOnInit(): void {
    this.modalSS.$modal.subscribe((valor) => {
      this.modalSwitch = valor;
    });
  }

  openModal() {
    this.modalSwitch = true;
  }
}
