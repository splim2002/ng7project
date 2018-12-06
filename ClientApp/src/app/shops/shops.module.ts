import { AgmCoreModule } from '@agm/core';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ShopDetailComponent } from './pages/shop-detail/shop-detail.component';
import { ShopListComponent } from './pages/shop-list/shop-list.component';
import { ShopsRoutingModule } from './shops-routing.module';
import { MapSimpleComponent } from './maps/map-simple/map-simple.component';

@NgModule({
  declarations: [ShopListComponent, ShopDetailComponent, MapSimpleComponent],
  imports: [
    CommonModule,
    ShopsRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: environment.googleMapAPIKey
    })
  ]
})
export class ShopsModule {}
