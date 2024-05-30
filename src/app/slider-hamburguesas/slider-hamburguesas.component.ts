import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { SwitchService } from '../services/switch.service';

@Component({
  selector: 'app-slider-hamburguesas',
  templateUrl: './slider-hamburguesas.component.html',
  styleUrl: './slider-hamburguesas.component.css',
})
export class SliderHamburguesasComponent implements OnInit {
  modalSwitch = false;

  @ViewChild('asReferencia') idModal?: ElementRef;
  constructor(private modalSS: SwitchService) {}

  ngOnInit(): void {
    this.modalSS.$modal.subscribe((valor) => {
      this.modalSwitch = valor;
    });
  }

  openModal() {
    const asReferencia = document.querySelectorAll('.carousel-item');

    console.log(asReferencia);
    this.modalSwitch = true;
  }
}
