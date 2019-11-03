import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material';

import { MeliusSidenavModule } from '@melius/sidenav';
import { DocsSidenavComponent } from './docs-sidenav.component';
import { DocsSidenavRoutingModule } from './docs-sidenav-routing.module';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MeliusSidenavModule,
    DocsSidenavRoutingModule,
  ],
  declarations: [DocsSidenavComponent],
})
export class DocsSidenavModule {}
