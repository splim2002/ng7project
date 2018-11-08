import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-map-simple',
  templateUrl: './map-simple.component.html',
  styleUrls: ['./map-simple.component.scss']
})
export class MapSimpleComponent {
  @Input()
  myLat: number;

  @Input()
  myLng: number;

  @Input()
  myZoom: number;

  constructor() {}
}
