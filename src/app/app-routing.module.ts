import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';

import { LayoutAdminComponent } from './layouts/layout-admin/layout-admin.component';

import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';



const routes: Routes = [
  { path: '', component: HomePageComponent },

  {
    path: 'admin', component: LayoutAdminComponent, children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },


    ],
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
