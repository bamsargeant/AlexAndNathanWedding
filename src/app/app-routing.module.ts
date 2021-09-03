import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BioComponent } from './pages/bio/bio.component';
import { DirectionsComponent } from './pages/directions/directions.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { InformationComponent } from './pages/information/information.component';
import { LandingComponent } from './pages/landing/landing.component';
import { RegistryComponent } from './pages/registry/registry.component';
import { RsvpComponent } from './pages/rsvp/rsvp.component';

const routes: Routes = [
  { path: 'our-story', component: BioComponent },
  { path: 'directions', component: DirectionsComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'information', component: InformationComponent },
  { path: 'registry', component: RegistryComponent },
  { path: 'rsvp', component: RsvpComponent },
  { path: '**', component: LandingComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
