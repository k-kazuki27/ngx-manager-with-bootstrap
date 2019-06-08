import { Component, OnInit } from '@angular/core'
import { ControlValueAccessor } from '@angular/forms'

@Component({
  selector: 'app-input-dropdown',
  templateUrl: './input-dropdown.component.html',
  styleUrls: ['./input-dropdown.component.scss']
})
export class InputDropdownComponent implements OnInit, ControlValueAccessor {
  items = ['テスト１', 'テスト２', 'テスト３']

  constructor() {}

  ngOnInit() {}

  writeValue(obj: any): void {
    throw new Error('Method not implemented.')
  }
  registerOnChange(fn: any): void {
    throw new Error('Method not implemented.')
  }
  registerOnTouched(fn: any): void {
    throw new Error('Method not implemented.')
  }

  select(item: string): void {}
}
