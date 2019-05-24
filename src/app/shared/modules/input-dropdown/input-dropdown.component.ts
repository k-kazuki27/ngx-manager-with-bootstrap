import { Component, Input, OnInit } from '@angular/core'
import { FormGroup } from '@angular/forms'

@Component({
  selector: 'app-input-dropdown',
  templateUrl: './input-dropdown.component.html',
  styleUrls: ['./input-dropdown.component.scss']
})
export class InputDropdownComponent implements OnInit {
  @Input()
  form!: FormGroup

  items = ['テスト１', 'テスト２', 'テスト３']

  constructor() {}

  ngOnInit() {}

  select(item: string): void {}
}
