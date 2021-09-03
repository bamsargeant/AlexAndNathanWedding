import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleBannerComponent } from './title-banner/title-banner.component';
import { MapComponent } from './map/map.component';
import { WeddingDateComponent } from './wedding-date/wedding-date.component';
import { CarouselComponent } from './carousel/carousel.component';
import { GalleryItemComponent } from './gallery-item/gallery-item.component';
import { RsvpFormComponent } from './rsvp-form/rsvp-form.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    TitleBannerComponent,
    MapComponent,
    WeddingDateComponent,
    CarouselComponent,
    GalleryItemComponent,
    RsvpFormComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    TitleBannerComponent,
    MapComponent,
    WeddingDateComponent,
    CarouselComponent,
    GalleryItemComponent,
    RsvpFormComponent,
    NavbarComponent
  ]
})
export class ComponentsModule { }
