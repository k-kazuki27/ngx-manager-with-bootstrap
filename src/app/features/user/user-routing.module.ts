import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { UnsavedChangeGuard } from 'src/app/shared'

import { UserDetailComponent } from './user-detail/user-detail.component'
import { UserListComponent } from './user-list/user-list.component'

const routes: Routes = [
  { path: '', component: UserListComponent },
  {
    path: 'detail',
    component: UserDetailComponent,
    canDeactivate: [UnsavedChangeGuard]
  },
  {
    path: 'detail/:id',
    component: UserDetailComponent,
    canDeactivate: [UnsavedChangeGuard]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {}
