import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgFor } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { BoxVideoComponent } from './box-video/box-video.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { CartaMenuComponent } from './carta-menu/carta-menu.component';
import { DeliveryComponent } from './delivery/delivery.component';
import { GaleryComponent } from './galery/galery.component';
import { SliderHamburguesasComponent } from './slider-hamburguesas/slider-hamburguesas.component';
import { SliderCervezasComponent } from './slider-cervezas/slider-cervezas.component';
import { SwiperModule } from 'swiper/angular';
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    BoxVideoComponent,
    NosotrosComponent,
    CartaMenuComponent,
    DeliveryComponent,
    GaleryComponent,
    SliderHamburguesasComponent,
    SliderCervezasComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgFor,
    BrowserAnimationsModule,
    SwiperModule,
  ],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
