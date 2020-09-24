import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as L from 'leaflet';

@Injectable({
  providedIn: 'root'
})
export class MarkerService {

  capitals: string = '/assets/data/locations.geojson';

  constructor(private http: HttpClient) {
  }

  makeCapitalMarkers(map: L.Map): void {
    this.http.get(this.capitals).subscribe((res: any) => {
      for (const c of res.results) {
        console.log(c);
        const lat = c.lat;
        const lon = c.lon;
        const marker = L.marker([lon, lat]).addTo(map);
      }
    });
  }
}
