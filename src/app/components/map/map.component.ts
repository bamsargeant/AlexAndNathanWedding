import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { GoogleMap } from '@angular/google-maps';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.sass']
})
export class MapComponent {
  private weddingLocation: google.maps.LatLngLiteral = {
    lat: -34.43000149267435,
    lng: 150.8074763153243
  };

  private weddingIcon: google.maps.Icon = {
    url: "data:image/png;base64,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",

  }

  @Input() center: google.maps.LatLngLiteral = this.weddingLocation;

  @Input() zoom: number = 12;

  @Input() markerOptions: google.maps.MarkerOptions = {
    draggable: false,
    clickable: true,
    icon: this.weddingIcon
  };

  @Input() markerPositions: google.maps.LatLngLiteral[] = [this.center];

  apiLoaded: Observable<boolean>;

  constructor(httpClient: HttpClient) {
    this.apiLoaded = httpClient.jsonp('https://maps.googleapis.com/maps/api/js?key=AIzaSyCZxsBsFPOxwrDPUm_m4xPTvKrvJ8bw5eg', 'callback')
        .pipe(
          map(() => true),
          catchError(() => of(false)),
        );
  }

  addMarker(event: google.maps.MapMouseEvent) {
    if (event.latLng != null)
      this.markerPositions.push(event.latLng.toJSON());
  }
}
