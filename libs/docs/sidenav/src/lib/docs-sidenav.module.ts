import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MeliusSidenavModule } from '@melius/sidenav';
import { DocsSidenavComponent } from './docs-sidenav.component';
import { DocsSidenavRoutingModule } from './docs-sidenav-routing.module';

@NgModule({
  imports: [CommonModule, DocsSidenavRoutingModule, MeliusSidenavModule],
  declarations: [DocsSidenavComponent],
})
export class DocsSidenavModule {}
