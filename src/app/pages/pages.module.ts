import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { BsDropdownModule } from 'ngx-bootstrap'

import { CollapseButtonComponent } from './components/collapse-button/collapse-button.component'
import { HeaderComponent } from './components/header/header.component'
import { SidebarComponent } from './components/sidebar/sidebar.component'
import { PagesRoutingModule } from './pages-routing.module'
import { PagesComponent } from './pages.component'
import { PagesResolverModule } from './services/pages-resolver.module'

@NgModule({
  declarations: [
    PagesComponent,
    HeaderComponent,
    SidebarComponent,
    CollapseButtonComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    PagesResolverModule,
    BsDropdownModule.forRoot()
  ]
})
export class PagesModule {}
