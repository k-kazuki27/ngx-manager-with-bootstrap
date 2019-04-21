import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { PaginationModule } from 'ngx-bootstrap'

import { CustomPaginationComponent } from './custom-pagination.component'

@NgModule({
  declarations: [CustomPaginationComponent],
  imports: [CommonModule, PaginationModule.forRoot()],
  exports: [CustomPaginationComponent]
})
export class CustomPaginationModule {}
