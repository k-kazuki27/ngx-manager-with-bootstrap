import { Component, Input, OnInit } from '@angular/core'
import { FormControl, FormGroup } from '@angular/forms'

@Component({
  selector: 'app-input-dropdown',
  templateUrl: './input-dropdown.component.html',
  styleUrls: ['./input-dropdown.component.scss']
})
export class InputDropdownComponent implements OnInit {
  @Input()
  parentForm!: FormGroup

  @Input()
  controlName!: string

  items = ['テスト１', 'テスト２', 'テスト３']

  constructor() {}

  ngOnInit() {}

  select(item: string): void {
    const formControl = this.parentForm.get(this.controlName) as FormControl
    formControl.setValue(item)
  }
}
