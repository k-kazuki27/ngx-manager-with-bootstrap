import {
  Component,
  ElementRef,
  OnInit,
  Optional,
  Self,
  ViewChild
} from '@angular/core'
import { ControlValueAccessor, NgControl } from '@angular/forms'

@Component({
  selector: 'app-reusable-form',
  templateUrl: './reusable-form.component.html',
  styleUrls: ['./reusable-form.component.scss']
})
export class ReusableFormComponent implements OnInit, ControlValueAccessor {
  @ViewChild('input', { static: true }) input!: ElementRef

  disabled!: boolean
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
        control.setValidators(control.validator)
        control.updateValueAndValidity()
      }
    }
  }

  writeValue(obj: any): void {
    this.input.nativeElement.value = obj
  }
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
