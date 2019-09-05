import { NgModule } from '@angular/core'
import { SharedModule } from 'src/app/shared/shared.module'

import { UserDetailComponent } from './user-detail/user-detail.component'
import { UserListComponent } from './user-list/user-list.component'
import { UserRoutingModule } from './user-routing.module'
import { UserServiceModule } from './user-shared'
import { UserSearchComponent } from './user-shared/components/user-search/user-search.component'

@NgModule({
  declarations: [UserListComponent, UserDetailComponent, UserSearchComponent],
  imports: [UserRoutingModule, UserServiceModule, SharedModule]
})
export class UserModule {}
