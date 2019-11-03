import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { DocsNavTabsComponent } from './docs-nav-tabs.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: DocsNavTabsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DocsNavTabsRoutingModule {}
