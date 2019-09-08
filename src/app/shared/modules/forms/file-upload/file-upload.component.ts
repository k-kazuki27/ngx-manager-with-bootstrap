import { Component, OnInit, Optional, Self } from '@angular/core'
import {
  ControlValueAccessor,
  FormControl,
  NgControl,
  ValidatorFn
} from '@angular/forms'

import {
  FILE_TYPES,
  FileUploadValidator,
  Image,
  MAX_SIZE
} from './file-upload-shared'

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent implements OnInit, ControlValueAccessor {
  fileTypes = FILE_TYPES
  maxsize = MAX_SIZE // 5MB
  disabled!: boolean
  image: Image | null = null
  isDragOver = false

  onChange!: (value: any) => void
  onTouched!: () => void

  constructor(@Self() @Optional() private ngControl: NgControl) {
    if (this.ngControl) {
      this.ngControl.valueAccessor = this
    }
  }

  ngOnInit() {
    if (this.ngControl) {
      const control = this.ngControl.control as FormControl

      if (control) {
        this.image = control.value as Image
        if (this.image) {
          this.image.size = 1
          this.image.type = 'image/png'
        }
        const validators: ValidatorFn[] = [
          FileUploadValidator.fileType(),
          FileUploadValidator.fileSize()
        ]
        control.setValidators(validators)
        control.updateValueAndValidity()
      }
    }
  }

  writeValue(obj: any): void {}

  registerOnChange(fn: any): void {
    this.onChange = fn
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn
  }
  setDisabledState(isDisabled: boolean) {
    this.disabled = isDisabled
  }

  onDragOver(e: Event): void {
    if (e) {
      this.isDragOver = true
      e.preventDefault()
    }
  }

  onDragLeave(e: Event): void {
    this.isDragOver = false
  }

  onDrop(e: Event): void {
    if (e) {
      e.preventDefault()
      if (this.disabled) {
        return
      }
      const drag = e as DragEvent
      if (drag && drag.dataTransfer) {
        const fileList: FileList = drag.dataTransfer.files
        const file: File = fileList[0]
        this.setImage(file)
      }
    }
  }

  private setImage(file: File) {
    const reader = new FileReader()

    reader.onload = (e: ProgressEvent) => {
      if (e && e.target) {
        const target = e.target as FileReader
        this.image = {
          type: file.type,
          size: file.size,
          name: file.name,
          src: target.result
        }
        this.onChange(this.image)
      }
    }
    reader.readAsDataURL(file)
  }

  deleteImage() {
    this.image = null
    this.onChange(null)
  }
  onFileSelect(e: Event) {
    if (e) {
      const fileInput = e.target as HTMLInputElement
      const fileList: FileList | null = fileInput.files
      if (fileList) {
        const file: File = fileList[0]
        this.setImage(file)
      }
    }
  }
}
