import { FormGroup } from '@angular/forms'

export abstract class AbstractDetail {
  id: number
  form: FormGroup
  formGroupClass = 'form-group row align-items-center'
  labelClass = 'col-sm-3 col-form-label col-form-label-sm'
  inputClass = 'form-control form-control-sm col-sm-9'
  errorLabelClass = 'offset-sm-3 col-sm-9'

  cancel() {
    history.back()
  }
}
