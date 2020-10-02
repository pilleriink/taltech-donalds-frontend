import { Component, OnInit } from '@angular/core';
import {Advertisement} from '../../../advertisement';

@Component({
  selector: 'app-ad-slider',
  templateUrl: './ad-slider.component.html',
  styleUrls: ['./ad-slider.component.css']
})
export class AdSliderComponent implements OnInit {

  // TODO: Get ads from API

  ad2: Advertisement = {
    image: '/assets/ttd2.jpg',
    link: 'https://gmail.com/',
    alt: 'ad2'
  };

  ad3: Advertisement = {
    image: '/assets/ttd3.jpg',
    link: 'https://www.postimees.ee',
    alt: 'ad3'
  };

  ad4: Advertisement = {
    image: '/assets/ttd4.jpg',
    link: 'https://www.facebook.com',
    alt: 'ad4'
  };

  ads: Advertisement[] = [
    this.ad2,
    this.ad3,
    this.ad4
  ];

  adsLoop: Advertisement[] = this.ads.slice(1, this.ads.length);
  constructor() { }

  ngOnInit() {
  }

}