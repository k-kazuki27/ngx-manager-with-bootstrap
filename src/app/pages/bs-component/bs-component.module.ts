import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { NgSelectModule } from '@ng-select/ng-select'
import { TabsModule, TypeaheadModule } from 'ngx-bootstrap'
import { FileUploadModule, InputDropdownModule } from 'src/app/shared'
import { ReusableFormModule } from 'src/app/shared/modules/custom-forms'

import { BsComponentRoutingModule } from './bs-component-routing.module'
import { BsComponentComponent } from './bs-component.component'

@NgModule({
  declarations: [BsComponentComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BsComponentRoutingModule,
    NgSelectModule,
    InputDropdownModule,
    TabsModule.forRoot(),
    TypeaheadModule.forRoot(),
    FileUploadModule,
    ReusableFormModule
  ]
})
export class BsComponentModule {}
