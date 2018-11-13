import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GridsterModule } from 'angular-gridster2';
import { DragDropGridsterRoutingModule } from './drag-drop-gridster-routing.module';
import { DefaultComponent } from './pages/default/default.component';

@NgModule({
  declarations: [DefaultComponent],
  imports: [CommonModule, DragDropGridsterRoutingModule, GridsterModule]
})
export class DragDropGridsterModule {}
