import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-slider-cervezas',
  templateUrl: './slider-cervezas.component.html',
  styleUrl: './slider-cervezas.component.css',
})
export class SliderCervezasComponent implements OnInit {
  ngOnInit(): void {
    $(document).ready(function () {
      $('.carousel').carousel({
        padding: 10,
        shift: 0,
        noWrap: true,
        numVisible: 12,
      });
    });
  }
}
