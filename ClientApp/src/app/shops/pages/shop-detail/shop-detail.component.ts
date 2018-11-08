import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop-detail',
  templateUrl: './shop-detail.component.html',
  styleUrls: ['./shop-detail.component.scss']
})
export class ShopDetailComponent implements OnInit {
  // initial center position for the map
  lat = 51.673858;
  lng = 7.815982;
  locationInfo = 'My shop ABC';

  // google maps zoom level
  zoom = 8;

  // Custom marker
  markerIcon = {
    url: require('../../../../assets/images/map-icons/grey-marker.png'),
    scaledSize: {
      height: 48,
      width: 30
    }
  };

  constructor() {}

  ngOnInit() {}
}
