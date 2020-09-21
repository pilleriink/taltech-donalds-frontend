import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import  * as L from 'leaflet';
import 'mapbox-gl-leaflet';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']
})
export class LocationsComponent implements OnInit, AfterViewInit {

  private map: L.Map;

  @ViewChild('map',{static: false})
  private mapContainer: ElementRef<HTMLElement>;

  constructor() { }

  ngOnInit() {
    var map = L.map('map', { center: [34, 8], zoom: 7 });
    var url = 'http://localhost:8080/geoserver/webmapespace/wms';
    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png').addTo(map);
  }

  ngAfterViewInit() {
    const myAPIKey = "731e1cda10e94dc2bb339db1047835ba";
    const mapStyle = "https://maps.geoapify.com/v1/styles/osm-carto/style.json";
    const initialState = {
      lng: 11,
      lat: 49,
      zoom: 4
    }
    const map = new L.Map(this.mapContainer.nativeElement).setView(
      [initialState.lat, initialState.lng],
      initialState.zoom
    );

    map.attributionControl
      .setPrefix("")
      .addAttribution(
        'Powered by <a href="https://www.geoapify.com/" target="_blank">Geoapify</a> | © OpenStreetMap <a ' +
        'href="https://www.openstreetmap.org/copyright" target="_blank">contributors</a>'
      );

    L.mapboxGL({
      style: `${mapStyle}?apikey=${myAPIKey}`,
      accessToken: "no-token"
    }).addTo(map);

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.map);
  }

}
