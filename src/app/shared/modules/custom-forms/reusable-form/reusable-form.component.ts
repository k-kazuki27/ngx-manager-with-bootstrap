import {
  Component,
  ElementRef,
  OnInit,
  Optional,
  Self,
  ViewChild
} from '@angular/core'
import { ControlValueAccessor, NgControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-reusable-form',
  templateUrl: './reusable-form.component.html',
  styleUrls: ['./reusable-form.component.scss']
})
export class ReusableFormComponent implements OnInit, ControlValueAccessor {
  @ViewChild('input', { static: true }) input!: ElementRef

  disabled!: boolean
  onChange!: (value: any) => void
  onTouched!: (value: any) => void

  constructor(@Self() @Optional() public controlDir: NgControl) {
    if (this.controlDir) {
      this.controlDir.valueAccessor = this
    }
  }

  ngOnInit() {
    const control = this.controlDir.control
    if (control) {
      const validators = control.validator
        ? [control.validator, Validators.required]
        : Validators.required

      control.setValidators(validators)
      control.updateValueAndValidity()
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
