import { Component, Input, OnInit } from '@angular/core';

interface Alitas {
  id: number;
  title: string;
  imagenAlita: string;
}

@Component({
  selector: 'app-slider-alitas',
  templateUrl: './slider-alitas.component.html',
  styleUrl: './slider-alitas.component.css',
})
export class SliderAlitasComponent implements OnInit {
  modalAlita = false;
  @Input() Alita: Alitas[] = [];
  ngOnInit(): void {}

  openModalAlita(index: number) {
    this.modalAlita = true;
  }
  closeModalAlita() {
    this.modalAlita = false;
  }
}
