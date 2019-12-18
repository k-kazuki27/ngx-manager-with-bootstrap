import { AfterViewInit, Component, OnInit, Optional, Self } from '@angular/core'
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
  styleUrls: ['./date-time-picker.component.scss']
})
export class DateTimePickerComponent
  implements OnInit, AfterViewInit, ControlValueAccessor {
  form!: FormGroup

  onChange!: (value: Date | null) => void
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
      date: [null, []],
      time: [null, []]
    })

    if (this.ngControl) {
      const control = this.ngControl.control as FormControl

      if (control) {
        this.date.setValue(control.value as Date)
        this.time.setValue(control.value as Date)

        const validators: ValidatorFn[] = [DateFormsValidator.invalidBsDate()]
        const parentValidator = control.validator
        if (parentValidator) {
          validators.push(parentValidator)
          this.date.setValidators(parentValidator)
          this.time.setValidators(parentValidator)
        }

        const asyncValidators: AsyncValidatorFn[] = []
        const parentAsyncValidator = control.asyncValidator
        if (parentAsyncValidator) {
          asyncValidators.push(parentAsyncValidator)
          this.date.setAsyncValidators(parentAsyncValidator)
          this.time.setAsyncValidators(parentAsyncValidator)
        }

        control.setValidators(validators)
        control.setAsyncValidators(asyncValidators)
        control.updateValueAndValidity()
      }
    }
  }

  ngAfterViewInit() {
    this.date.valueChanges.subscribe(date => {
      if (!date) {
        this.onChange(date)
        return
      }

      const time: Date =
        typeof this.time.value === 'string'
          ? new Date(this.time.value as string)
          : (this.time.value as Date)

      if (time) {
        date.setHours(time.getHours(), time.getMinutes(), 0, 0)
      }
      this.onChange(date)
    })

    this.time.valueChanges.subscribe((time: Date) => {
      if (!time) {
        this.onChange(time)
        return
      }

      const date =
        typeof this.date.value === 'string'
          ? new Date(this.date.value as string)
          : (this.date.value as Date)
      if (date) {
        time.setFullYear(date.getFullYear(), date.getMonth(), date.getDate())
        time.setHours(time.getHours(), time.getMinutes(), 0, 0)
      }
      this.onChange(time)
    })
  }

  get date(): FormControl {
    return this.form.get('date') as FormControl
  }

  get time(): FormControl {
    return this.form.get('time') as FormControl
  }

  writeValue(obj: any): void {
    if (this.ngControl) {
      const control = this.ngControl.control as FormControl
      if (control) {
        this.date.setValue(control.value as Date)
        this.time.setValue(control.value as Date)
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
