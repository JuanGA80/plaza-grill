import { Component } from '@angular/core';
import SwiperCore from 'swiper';
@Component({
  selector: 'app-slider-cervezas',
  templateUrl: './slider-cervezas.component.html',
  styleUrl: './slider-cervezas.component.css',
  template: `
    <swiper
      [slidesPerView]="3"
      [spaceBetween]="50"
      (swiper)="onSwiper($event)"
      (slideChange)="onSlideChange()"
    >
      <ng-template swiperSlide>Slide 1</ng-template>
      <ng-template swiperSlide>Slide 2</ng-template>
      <ng-template swiperSlide>Slide 3</ng-template>
    </swiper>
  `,
})
export class SliderCervezasComponent {
  onSwiper([swiper]: any) {
    console.log(swiper);
  }
  onSlideChange() {
    console.log('slide change');
  }
}
