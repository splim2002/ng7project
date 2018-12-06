import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapSimpleComponent } from './map-simple.component';

describe('MapSimpleComponent', () => {
  let component: MapSimpleComponent;
  let fixture: ComponentFixture<MapSimpleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapSimpleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
