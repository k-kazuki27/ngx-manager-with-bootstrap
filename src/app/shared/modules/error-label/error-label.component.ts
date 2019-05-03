import { Component, Input, OnInit } from '@angular/core'
import { FormControl } from '@angular/forms'

const ERROR_MAP = new Map<string, string>([['required', '必須です。']])

@Component({
  selector: 'app-error-label',
  templateUrl: './error-label.component.html',
  styleUrls: ['./error-label.component.scss']
})
export class ErrorLabelComponent implements OnInit {
  @Input()
  form: FormControl

  constructor() {}

  ngOnInit() {}

  getErrorMessage(): string {
    for (const field of Object.keys(this.form.errors)) {
      if (this.form.errors[field]) {
        return ERROR_MAP.get(field)
      }
    }
  }
}
