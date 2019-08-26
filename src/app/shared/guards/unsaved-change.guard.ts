import { Injectable } from '@angular/core'
import { FormGroup } from '@angular/forms'
import { CanDeactivate } from '@angular/router'

import { ConfirmService } from '../modals'

export interface FormComponent {
  form: FormGroup
}

@Injectable()
export class UnsavedChangeGuard implements CanDeactivate<FormComponent> {
  constructor(private confirmService: ConfirmService) {}

  canDeactivate(component: FormComponent) {
    if (component.form.dirty) {
      return this.confirmService.openUnsavedConfirm().asObservable()
    }

    return true
  }
}
