import { Routes, RouterModule } from '@angular/router';

import { DocsSidenavComponent } from './docs-sidenav.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: DocsSidenavComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DocsSidenavRoutingModule {}
