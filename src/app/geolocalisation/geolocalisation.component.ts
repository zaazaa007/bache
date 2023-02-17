import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-geolocalisation',
  templateUrl: './geolocalisation.component.html',
  styleUrls: ['./geolocalisation.component.scss']
})
export class GeolocalisationComponent implements OnInit {
  latitude = 33.5683639;
  longitude = -7.6783124;
  mapType = 'satellite';
  constructor() { }

  ngOnInit(): void {
  }

}
