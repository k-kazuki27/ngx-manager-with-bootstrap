import { Component, OnInit, Optional, Self } from '@angular/core'
import { ControlValueAccessor, NgControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
  // providers: [
  //   {
  //     provide: NG_VALUE_ACCESSOR,
  //     useExisting: forwardRef(() => FileUploadComponent),
  //     multi: true
  //   }
  // ]
})
export class FileUploadComponent implements OnInit, ControlValueAccessor {
  disabled!: boolean
  image: Image | null = null

  onChange!: (value: any) => void
  onTouched!: () => void

  constructor(@Self() @Optional() private ngControl: NgControl) {
    if (this.ngControl) {
      this.ngControl.valueAccessor = this
    }
  }

  ngOnInit() {
    if (this.ngControl) {
      const control = this.ngControl.control
      if (control) {
        const validators = control.validator
          ? [control.validator, Validators.required]
          : Validators.required
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
      e.preventDefault()
    }
  }

  onDrop(e: Event): void {
    if (e) {
      e.preventDefault()
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
          name: file.name,
          src: target.result
        }
        console.log(this.image)
        this.onChange(this.image)
      }
    }
    reader.readAsDataURL(file)
  }

  deleteImage() {
    this.image = null
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

interface Image {
  name: string
  src: string | ArrayBuffer | null
}
