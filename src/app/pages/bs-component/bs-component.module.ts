import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { NgSelectModule } from '@ng-select/ng-select'
import { TabsModule } from 'ngx-bootstrap'
import { InputDropdownModule } from 'src/app/shared'

import { BsComponentRoutingModule } from './bs-component-routing.module'
import { BsComponentComponent } from './bs-component.component'

@NgModule({
  declarations: [BsComponentComponent],
  imports: [
    CommonModule,
    FormsModule,
    BsComponentRoutingModule,
    NgSelectModule,
    InputDropdownModule,
    TabsModule.forRoot()
  ]
})
export class BsComponentModule {}
