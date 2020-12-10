import {Component, OnInit} from '@angular/core';
import {Location} from '../../../location';
import {MarkerService} from '../../../marker.service';

@Component({
    selector: 'app-locationmod',
    templateUrl: './locationmod.component.html',
    styleUrls: ['./locationmod.component.css']
})
export class LocationmodComponent implements OnInit {

    location: Location = new Location();
    locations: Location[] = [];
    locationToDelete: Location = new Location();

    constructor(private markerService: MarkerService) {
    }

    ngOnInit(): void {
        this.markerService.getLocations().subscribe(data => {
            this.locations = data;
        });
    }

    addLocation() {
        console.log(this.location);
        if (this.fieldsAreFilled()) {
            return this.markerService.addLocation(this.location).subscribe(() => location.reload());
        }
    }

    deleteLocation() {
        console.log(this.locationToDelete);
        if (this.locationToDelete.id !== 0) {
          return this.markerService.deleteLocation(this.locationToDelete).subscribe(() => {location.reload()});
        }
    }

    fieldsAreFilled(): boolean {
        return this.location.name !== ''
            && this.location.address !== ''
            && this.location.lon !== 0
            && this.location.lat !== 0;
    }

    controlName() {
        if (this.location.name === '') {
            return 'Name is missing';
        }
    }

    controlAddress() {
        if (this.location.address === '') {
            return 'Address is missing';
        }
    }

    controlLon() {
        if (this.location.lon === 0) {
            return 'Longitude is missing';
        }
    }

    controlLat() {
        if (this.location.lat === 0) {
            return 'Latitude is missing';
        }
    }

    controlLocation() {
        if (this.locationToDelete.id === 0) {
            return 'Choose location';
        }
    }

}
