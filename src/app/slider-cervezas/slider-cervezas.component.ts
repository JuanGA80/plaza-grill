import { Component, OnInit, Input } from '@angular/core';
interface Cervezas {
  id: number;
  title: string;
  picture: string;
}

@Component({
  selector: 'app-slider-cervezas',
  templateUrl: './slider-cervezas.component.html',
  styleUrl: './slider-cervezas.component.css',
})
export class SliderCervezasComponent implements OnInit {
  @Input() Cerveza: Cervezas[] = [];
  ngOnInit(): void {}
}
