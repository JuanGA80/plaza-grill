import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { BoxVideoComponent } from './box-video/box-video.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { CartaMenuComponent } from './carta-menu/carta-menu.component';
import { DeliveryComponent } from './delivery/delivery.component';
import { GaleryComponent } from './galery/galery.component';

@NgModule({
  declarations: [AppComponent, MenuComponent, BoxVideoComponent, NosotrosComponent, CartaMenuComponent, DeliveryComponent, GaleryComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
