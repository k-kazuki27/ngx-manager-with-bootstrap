import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { PagesComponent } from './pages.component'

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: 'home',
        loadChildren: './home/home.module#HomeModule'
      },
      {
        path: 'user',
        loadChildren: './user/user.module#UserModule'
      },
      {
        path: 'bs-component',
        loadChildren: './bs-component/bs-component.module#BsComponentModule'
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {}
