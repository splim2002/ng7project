import { NgModule } from '@angular/core';
import { HeaderComponent } from 'src/app/core/components/header/header.component';
import { PageNotFoundComponent } from 'src/app/core/pages/page-not-found/page-not-found.component';

@NgModule({
  imports: [],
  declarations: [PageNotFoundComponent, HeaderComponent],
  exports: [PageNotFoundComponent, HeaderComponent]
})
export class CoreModule {}
