import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopsRoutingModule } from './shops-routing.module';
import { ShopListComponent } from './pages/shop-list/shop-list.component';
import { ShopDetailComponent } from './pages/shop-detail/shop-detail.component';

@NgModule({
  declarations: [ShopListComponent, ShopDetailComponent],
  imports: [
    CommonModule,
    ShopsRoutingModule
  ]
})
export class ShopsModule { }
