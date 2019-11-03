import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { DocsHomeComponent } from './docs-home.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: DocsHomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DocsHomeRoutingModule {}
