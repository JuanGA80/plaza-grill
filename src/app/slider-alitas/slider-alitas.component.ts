import { Component, Input, OnInit } from '@angular/core';

interface Hamburguesas {
  id: number;
  title: string;
  imagen: string;
}

@Component({
  selector: 'app-slider-alitas',
  templateUrl: './slider-alitas.component.html',
  styleUrl: './slider-alitas.component.css',
})
export class SliderAlitasComponent implements OnInit {
  @Input() Hamburguesa: Hamburguesas[] = [];
  ngOnInit(): void {}
}
