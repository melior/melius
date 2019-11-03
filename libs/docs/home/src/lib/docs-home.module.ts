import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocsHomeComponent } from './docs-home.component';
import { DocsHomeRoutingModule } from './docs-home-routing.module';

@NgModule({
  imports: [CommonModule, DocsHomeRoutingModule],
  declarations: [DocsHomeComponent],
})
export class DocsHomeModule {}
