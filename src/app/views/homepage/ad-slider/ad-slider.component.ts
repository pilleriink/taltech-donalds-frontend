import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ad-slider',
  templateUrl: './ad-slider.component.html',
  styleUrls: ['./ad-slider.component.css']
})
export class AdSliderComponent implements OnInit {
  ads: string[] = [         // TODO: get pics for ads from server.
    '/assets/ttd4.jpg',
    '/assets/ttd2.jpg',
    '/assets/ttd3.jpg'
  ];

  adsLoop: string[] = this.ads.slice(1, this.ads.length);
  constructor() { }

  ngOnInit() {
  }

}
