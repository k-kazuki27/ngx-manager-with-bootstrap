import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { FileUploadComponent } from './file-upload.component'

@NgModule({
  declarations: [FileUploadComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [FileUploadComponent]
})
export class FileUploadModule {}
