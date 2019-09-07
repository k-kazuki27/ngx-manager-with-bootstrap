import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  OnInit,
  Optional,
  Self
} from '@angular/core'
import {
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
  disabled!: boolean

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

  get date(): FormControl {
    return this.form.get('date') as FormControl
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
