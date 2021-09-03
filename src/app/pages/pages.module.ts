import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing/landing.component';
import { DirectionsComponent } from './directions/directions.component';
import { BioComponent } from './bio/bio.component';
import { GalleryComponent } from './gallery/gallery.component';
import { RsvpComponent } from './rsvp/rsvp.component';
import { RegistryComponent } from './registry/registry.component';
import { InformationComponent } from './information/information.component';
import { ComponentsModule } from '../components/components.module';



@NgModule({
  declarations: [
    LandingComponent,
    DirectionsComponent,
    BioComponent,
    GalleryComponent,
    RsvpComponent,
    RegistryComponent,
    InformationComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ]
})
export class PagesModule { }
