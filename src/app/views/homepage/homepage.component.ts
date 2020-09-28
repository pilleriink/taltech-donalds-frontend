import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  ads: string[] = [         // TODO: get pics for ads from server.
      '/assets/ttd1.jpg',
      '/assets/ttd2.jpg',
      '/assets/ttd3.jpg'
  ];

  constructor() { }

  ngOnInit() {
  }

}
