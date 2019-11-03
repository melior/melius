import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () => import('@melius/docs/home').then(m => m.DocsHomeModule),
  },
  {
    path: 'nav-tabs',
    loadChildren: () =>
      import('@melius/docs/nav-tabs').then(m => m.DocsNavTabsModule),
  },
  {
    path: 'sidenav',
    loadChildren: () =>
      import('@melius/docs/sidenav').then(m => m.DocsSidenavModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { initialNavigation: 'enabled' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
