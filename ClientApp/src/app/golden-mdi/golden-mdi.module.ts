import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GoldenMdiRoutingModule } from './golden-mdi-routing.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    GoldenMdiRoutingModule
  ]
})
export class GoldenMdiModule { }
