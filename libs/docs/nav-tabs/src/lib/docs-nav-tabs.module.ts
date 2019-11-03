import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavTabsModule } from '@melius/nav-tabs';
import { DocsNavTabsComponent } from './docs-nav-tabs.component';
import { DocsNavTabsRoutingModule } from './docs-nav-tabs-routing.module';

@NgModule({
  imports: [CommonModule, DocsNavTabsRoutingModule, NavTabsModule],
  declarations: [DocsNavTabsComponent],
})
export class DocsNavTabsModule {}
