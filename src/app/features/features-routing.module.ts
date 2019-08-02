import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { FeaturesComponent } from './features.component'

const routes: Routes = [
  {
    path: '',
    component: FeaturesComponent,
    children: [
      {
        path: 'home',
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'user',
        loadChildren: () => import('./user/user.module').then(m => m.UserModule)
      },
      {
        path: 'bs-component',
        loadChildren: () =>
          import('./bs-component/bs-component.module').then(
            m => m.BsComponentModule
          )
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeaturesRoutingModule {}
