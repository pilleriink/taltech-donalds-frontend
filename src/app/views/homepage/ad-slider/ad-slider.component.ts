import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Advertisement} from '../../../advertisement';
import {AdvertisementService} from '../../../advertisement.service';

@Component({
  selector: 'app-ad-slider',
  templateUrl: './ad-slider.component.html',
  styleUrls: ['./ad-slider.component.css']
})
export class AdSliderComponent implements OnInit {


  ads: Advertisement[] = [];
  bigAds: Advertisement[] = [];
  data = '';


  constructor(private route: ActivatedRoute, private adService: AdvertisementService) { }

  ngOnInit() {
    this.adService.getAds().subscribe(
        data => {
          this.ads = data;
          this.data = data.toString();
          this.bigAds = this.getBigAds();
            console.log(this.ads);
            console.log('DATA: ' + this.data);
            console.log(data);
            console.log(this.bigAds);
        }
    );
  }

    private getBigAds() {
        function isBigAd(ad) {
            return (ad.alt.includes('big'));
        }

        return this.ads.filter(isBigAd);
    }
}
