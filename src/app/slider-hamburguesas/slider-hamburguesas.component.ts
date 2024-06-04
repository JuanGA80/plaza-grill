import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { SwitchService } from '../services/switch.service';
interface Hamburguesas {
  id: number;
  title: string;
  picture: string;
}

@Component({
  selector: 'app-slider-hamburguesas',
  templateUrl: './slider-hamburguesas.component.html',
  styleUrl: './slider-hamburguesas.component.css',
})
export class SliderHamburguesasComponent implements OnInit {
  modalSwitch = false;

  @Input() Hamburguesa: Hamburguesas[] = [];
  @Input() position: number = 0;

  @ViewChild('asReferencia') idModal?: ElementRef;
  constructor(private modalSS: SwitchService) {}

  ngOnInit(): void {
    this.modalSS.$modal.subscribe((valor) => {
      this.modalSwitch = valor;
    });
  }

  openModal(index: number) {
    this.modalSwitch = true;
    this.position = index;
  }
}
