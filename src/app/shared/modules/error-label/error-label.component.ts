import { Component, Input, OnInit } from '@angular/core'
import { FormControl } from '@angular/forms'

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
}
