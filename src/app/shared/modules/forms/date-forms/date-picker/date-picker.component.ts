import { AfterViewInit, Component, Input, OnInit, Optional, Self } from '@angular/core'
import {
  ControlValueAccessor,
  FormBuilder,
  FormControl,
  FormGroup,
  NgControl,
  ValidatorFn
} from '@angular/forms'
import { BsDatepickerConfig } from 'ngx-bootstrap'
import { BsDatepickerViewMode } from 'ngx-bootstrap/datepicker/models'

import { DateFormsValidator, getDatepickerConfig } from '../date-forms-shared'

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss']
})
export class DatePickerComponent
  implements OnInit, AfterViewInit, ControlValueAccessor {
  @Input()
  mode: BsDatepickerViewMode = 'day'
  bsConfig!: Partial<BsDatepickerConfig>

  form!: FormGroup

  disabled!: boolean

  onChange!: (value: Date) => void
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
    this.bsConfig = Object.assign(getDatepickerConfig(), {
      minMode: this.mode,
      dateInputFormat: (this.mode === 'month' ? 'YYYY/MM' : 'YYYY/MM/DD')
    })

    this.form = this.fb.group({
      date: [null, []]
    })

    if (this.ngControl) {
      const control = this.ngControl.control as FormControl

      if (control) {
        this.date.setValue(control.value as Date)
        const validators: ValidatorFn[] = [DateFormsValidator.invalidBsDate()]
        control.setValidators(validators)
        control.updateValueAndValidity()
      }
    }
  }

  ngAfterViewInit() {
    this.date.valueChanges.subscribe(value => {
      this.onChange(value)
    })
  }

  add() {
    this.onChange(new Date())
  }
  get date(): FormControl {
    return this.form.get('date') as FormControl
  }

  writeValue(obj: any): void {}
  registerOnChange(fn: (value: Date) => void): void {
    this.onChange = fn
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn
  }
  setDisabledState(isDisabled: boolean) {
    this.disabled = isDisabled
  }
}
