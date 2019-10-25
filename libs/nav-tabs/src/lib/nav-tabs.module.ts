import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TabComponent } from './tab';
import { TabGroupComponent } from './tab-group';

@NgModule({
  imports: [CommonModule],
  declarations: [TabGroupComponent, TabComponent],
  exports: [TabGroupComponent, TabComponent],
})
export class NavTabsModule {}
