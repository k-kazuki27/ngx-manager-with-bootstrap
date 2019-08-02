import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { BsDropdownModule } from 'ngx-bootstrap'

import { FeaturesRoutingModule } from './features-routing.module'
import {
  CollapseButtonComponent,
  FeaturesServiceModule,
  HeaderComponent,
  SidebarComponent
} from './features-shared'
import { FeaturesComponent } from './features.component'

@NgModule({
  declarations: [
    FeaturesComponent,
    HeaderComponent,
    SidebarComponent,
    CollapseButtonComponent
  ],
  imports: [
    CommonModule,
    FeaturesRoutingModule,
    FeaturesServiceModule,
    BsDropdownModule.forRoot()
  ]
})
export class FeaturesModule {}
