import {Component, OnInit} from '@angular/core';
import {AdvertisementService} from '../../../advertisement.service';
import {Advertisement} from '../../../advertisement';

@Component({
    selector: 'app-admod',
    templateUrl: './admod.component.html',
    styleUrls: ['./admod.component.css']
})
export class AdmodComponent implements OnInit {

    ads: Advertisement[] = [];
    ad: Advertisement = new Advertisement();
    adToDelete: Advertisement = new Advertisement();

    constructor(private advertisementService: AdvertisementService) {
    }

    ngOnInit(): void {
        this.advertisementService.getAds().subscribe(data => {
            this.ads = data;
        });
    }

    addAd() {
        console.log(this.ad);
        if (this.fieldsAreFilled()) {
            return this.advertisementService.addAd(this.ad).subscribe(() => location.reload());
        }
    }

    deleteAd() {
        console.log(this.adToDelete);
        if (this.adToDelete.id !== 0) {
          return this.advertisementService.deleteAd(this.adToDelete).subscribe();
        }
    }

    fieldsAreFilled(): boolean {
        return this.ad.alt !== ''
            && this.ad.image !== ''
            && this.ad.link !== '';
    }

    controlName() {
        if (this.ad.alt === '') {
            return 'Alt is missing';
        }
    }

    controlImage() {
        if (this.ad.image === '') {
            return 'Image is missing';
        }
    }

    controlUrl() {
        if (this.ad.link === '') {
            return 'Link is missing';
        }
    }

    controlAd() {
        if (this.adToDelete.id === 0) {
            return 'Choose ad';
        }
    }

}
