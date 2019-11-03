import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MeliusSidenavComponent } from './sidenav.component';

@NgModule({
  imports: [CommonModule],
  declarations: [MeliusSidenavComponent],
  exports: [MeliusSidenavComponent],
})
export class MeliusSidenavModule {}
