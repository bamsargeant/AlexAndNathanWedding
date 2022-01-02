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
import { CharacterSheetAlexComponent } from './bio/character-sheets/character-sheet-alex/character-sheet-alex.component';
import { CharacterSheetNathanComponent } from './bio/character-sheets/character-sheet-nathan/character-sheet-nathan.component';
import { CharacterSheetTemplateComponent } from './bio/character-sheets/character-sheet-template/character-sheet-template.component';



@NgModule({
  declarations: [
    LandingComponent,
    DirectionsComponent,
    BioComponent,
    GalleryComponent,
    RsvpComponent,
    RegistryComponent,
    InformationComponent,
    CharacterSheetAlexComponent,
    CharacterSheetNathanComponent,
    CharacterSheetTemplateComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ],
  exports: [
    CharacterSheetAlexComponent,
    CharacterSheetNathanComponent,
    CharacterSheetTemplateComponent
  ]
})
export class PagesModule { }
