import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

import { HeaderComponent } from './components/header/header.component'
import { SidebarComponent } from './components/sidebar/sidebar.component'
import { PagesRoutingModule } from './pages-routing.module'
import { PagesComponent } from './pages.component'

@NgModule({
  declarations: [PagesComponent, HeaderComponent, SidebarComponent],
  imports: [CommonModule, PagesRoutingModule]
})
export class PagesModule {}
