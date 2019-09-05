import { Component, OnInit, Optional, Self } from '@angular/core'
import { ControlValueAccessor, FormControl, NgControl, ValidatorFn } from '@angular/forms'

@Component({
  selector: 'app-date-time-picker',
  templateUrl: './date-time-picker.component.html',
  styleUrls: ['./date-time-picker.component.scss']
})
export class DateTimePickerComponent implements OnInit, ControlValueAccessor {
  disabled!: boolean

  private value: Date | null = null

  get date(): Date | null {
    return this.value
  }
  set date(date: Date | null) {
    if (this.value !== date) {
      this.value = date
      this.onChange(date)
    }
  }

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
        this.date = control.value as Date

        const validators: ValidatorFn[] = []
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
}
