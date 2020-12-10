import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AdvertisementService} from '../../../advertisement.service';
import {Advertisement} from '../../../advertisement';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  ads: Advertisement[] = [];
  smallAds: Advertisement[] = [];

  constructor(private route: ActivatedRoute, private adService: AdvertisementService) { }

  ngOnInit() {
    this.adService.getAds().subscribe(
        data => {
          this.ads = data;
          this.smallAds = this.getSmallAds();
        }
    );
  }

  private getSmallAds() {
    function isSmallAd(ad) {
      return (ad.alt.includes('small'));
    }

    return this.ads.filter(isSmallAd);
  }

}
