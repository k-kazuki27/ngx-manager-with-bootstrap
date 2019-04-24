import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { PagesComponent } from './pages.component'

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: 'user',
        loadChildren: './user/user.module#UserModule'
      },
      {
        path: '',
        redirectTo: 'user',
        pathMatch: 'full'
      },
      {
        path: '**',
        redirectTo: 'user'
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {}
