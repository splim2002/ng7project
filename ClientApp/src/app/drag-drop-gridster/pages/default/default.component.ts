import { Component, OnInit } from '@angular/core';
import { GridsterConfig, GridsterItem } from 'angular-gridster2';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {
  gridOptions: GridsterConfig;
  gridItems: Array<GridsterItem>;

  constructor() {}

  static itemChange(item, itemComponent) {
    console.log('itemChanged', item, itemComponent);
  }

  static itemResize(item, itemComponent) {
    console.log('itemResized', item, itemComponent);
  }

  ngOnInit() {
    this.gridOptions = {
      itemChangeCallback: DefaultComponent.itemChange,
      itemResizeCallback: DefaultComponent.itemResize
    };

    this.gridItems = [
      { cols: 1, rows: 1, y: 0, x: 4 },
      { cols: 1, rows: 1, y: 1, x: 5 },
      { cols: 1, rows: 1, y: 1, x: 0 },
      { cols: 2, rows: 1, y: 0, x: 0 },
      { cols: 2, rows: 2, y: 0, x: 2 }
    ];
  }
}
