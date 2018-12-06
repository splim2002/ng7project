import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from 'src/app/core/components/header/header.component';
import { PageNotFoundComponent } from 'src/app/core/pages/page-not-found/page-not-found.component';
import { MenubarComponent } from './components/menubar/menubar.component';

@NgModule({
  imports: [RouterModule],
  declarations: [PageNotFoundComponent, HeaderComponent, MenubarComponent],
  exports: [PageNotFoundComponent, HeaderComponent, MenubarComponent]
})
export class CoreModule {}
