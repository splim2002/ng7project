import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopsRoutingModule } from './shops-routing.module';
import { ShopListComponent } from './pages/shop-list/shop-list.component';

@NgModule({
  declarations: [ShopListComponent],
  imports: [
    CommonModule,
    ShopsRoutingModule
  ]
})
export class ShopsModule { }
