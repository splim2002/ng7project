import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShopDetailComponent } from './pages/shop-detail/shop-detail.component';
import { ShopListComponent } from './pages/shop-list/shop-list.component';

const routes: Routes = [
  {
    path: '',
    component: ShopListComponent
  },
  {
    path: 'detail',
    component: ShopDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopsRoutingModule {}
