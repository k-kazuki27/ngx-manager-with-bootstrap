import { AfterViewInit, ChangeDetectionStrategy, Component, OnInit, Optional, Self } from '@angular/core'
import {
  AsyncValidatorFn,
  ControlValueAccessor,
  FormBuilder,
  FormControl,
  FormGroup,
  NgControl,
  ValidatorFn
} from '@angular/forms'

import { DateFormsValidator } from '../date-forms-shared'

@Component({
  selector: 'app-date-time-picker',
  templateUrl: './date-time-picker.component.html',
  styleUrls: ['./date-time-picker.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DateTimePickerComponent
  implements OnInit, AfterViewInit, ControlValueAccessor {
  form!: FormGroup

  onChange!: (value: any) => void
  onTouched!: () => void

  constructor(
    @Self() @Optional() private ngControl: NgControl,
    private fb: FormBuilder
  ) {
    if (this.ngControl) {
      this.ngControl.valueAccessor = this
    }
  }

  ngOnInit() {
    this.form = this.fb.group({
      date: [null, []]
    })

    if (this.ngControl) {
      const control = this.ngControl.control as FormControl

      if (control) {
        this.date.setValue(control.value as Date)

        const validators: ValidatorFn[] = [DateFormsValidator.invalidBsDate()]
        const parentValidator = control.validator
        if (parentValidator) {
          validators.push(parentValidator)
          this.date.setValidators(parentValidator)
        }

        const asyncValidators: AsyncValidatorFn[] = []
        const parentAsyncValidator = control.asyncValidator
        if (parentAsyncValidator) {
          asyncValidators.push(parentAsyncValidator)
          this.date.setAsyncValidators(parentAsyncValidator)
        }

        control.setValidators(validators)
        control.setAsyncValidators(asyncValidators)
        control.updateValueAndValidity()
      }
    }
  }

  ngAfterViewInit() {
    this.date.valueChanges.subscribe(value => {
      this.onChange(value)
    })
  }

  get date(): FormControl {
    return this.form.get('date') as FormControl
  }

  writeValue(obj: any): void {
    if (this.ngControl) {
      const control = this.ngControl.control as FormControl
      if (control) {
        this.date.setValue(control.value as Date)
      }
    }
  }
  registerOnChange(fn: any): void {
    this.onChange = fn
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn
  }
  setDisabledState(isDisabled: boolean) {
    isDisabled ? this.form.disable() : this.form.enable()
  }
}
