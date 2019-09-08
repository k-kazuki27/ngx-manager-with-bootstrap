import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms'
import { FILE_SIZE, FILE_TYPE } from 'src/app/shared'

import { FILE_TYPES, MAX_SIZE } from '../constants/file-upload'
import { Image } from '../models/file-upload'

export class FileUploadValidator {
  static fileType(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const image: Image = control.value
      return image !== null &&
        image.type !== undefined &&
        FILE_TYPES.indexOf(image.type) === -1
        ? FILE_TYPE
        : null
    }
  }

  static fileSize(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const image: Image = control.value as Image
      return image !== null && image.size !== undefined && image.size > MAX_SIZE
        ? FILE_SIZE
        : null
    }
  }
}
