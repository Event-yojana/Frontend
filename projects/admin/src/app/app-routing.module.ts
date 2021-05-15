import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [

  { path: '', loadChildren: () => import('./Layout/Content-pages/content-pages.module').then(m => m.ContentPagesModule) },
  { path: 'admin', loadChildren: () => import('./Layout/Full-pages/full-pages.module').then(m => m.FullPagesModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
