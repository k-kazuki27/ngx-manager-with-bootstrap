import { Component, Input, OnInit } from '@angular/core'
import { ControlContainer } from '@angular/forms'

@Component({
  selector: 'app-date-input',
  templateUrl: './date-input.component.html',
  styleUrls: ['./date-input.component.scss']
})
export class DateInputComponent implements OnInit {
  @Input()
  controlName!: string

  constructor(public controlContainer: ControlContainer) {}

  ngOnInit() {}
}
