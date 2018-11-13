import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DragDropGridsterRoutingModule } from './drag-drop-gridster-routing.module';
import { DefaultComponent } from './pages/default/default.component';

@NgModule({
  declarations: [DefaultComponent],
  imports: [
    CommonModule,
    DragDropGridsterRoutingModule
  ]
})
export class DragDropGridsterModule { }
