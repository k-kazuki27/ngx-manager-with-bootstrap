import { ValidationErrors } from '@angular/forms'

export const MAX_SIZE = 5242880 // 5MB
export const FILE_TYPES = ['image/png', 'image/jpeg', 'image/jpg']
export const FILE_SIZE: ValidationErrors = { fileSize: true }
export const FILE_TYPE: ValidationErrors = { fileType: true }
