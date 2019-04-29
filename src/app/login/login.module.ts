import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'

import { LoginRoutingModule } from './login-routing.module'
import { LoginComponent } from './login.component'

@NgModule({
  imports: [CommonModule, LoginRoutingModule, ReactiveFormsModule],
  declarations: [LoginComponent]
})
export class LoginModule {}
