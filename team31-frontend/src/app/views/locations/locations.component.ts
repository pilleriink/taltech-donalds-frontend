import { Component, AfterViewInit } from '@angular/core';
import  * as L from 'leaflet';
import 'mapbox-gl-leaflet';
import { MarkerService } from '../../_services/marker.service';

const iconRetinaUrl = 'assets/marker-icon-2x.png';
const iconUrl = 'assets/marker-icon.png';
const shadowUrl = 'assets/marker-shadow.png';
const iconDefault = L.icon({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41]
});
L.Marker.prototype.options.icon = iconDefault;

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']
})
export class LocationsComponent implements AfterViewInit {
  private map;

  constructor(private markerService: MarkerService) {}

  private initMap(): void {
    this.map = L.map('map', {
      center: [ 59.4370, 24.7536 ],
      zoom: 10
    });
    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.map);
  }
  ngAfterViewInit(): void {
    this.initMap()
    this.markerService.makeCapitalMarkers(this.map);
  }

}
