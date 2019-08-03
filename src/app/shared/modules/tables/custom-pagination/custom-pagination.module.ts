import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { PaginationModule } from 'ngx-bootstrap'

import { CustomPaginationComponent } from './custom-pagination.component'

@NgModule({
  declarations: [CustomPaginationComponent],
  imports: [CommonModule, FormsModule, PaginationModule.forRoot()],
  exports: [CustomPaginationComponent]
})
export class CustomPaginationModule {}
