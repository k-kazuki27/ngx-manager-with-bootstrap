import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-input-dropdown',
  templateUrl: './input-dropdown.component.html',
  styleUrls: ['./input-dropdown.component.scss']
})
export class InputDropdownComponent implements OnInit {
  // @Input()
  // form!: FormGroup

  items = ['テスト１', 'テスト２', 'テスト３']

  constructor() {}

  ngOnInit() {}

  select(item: string): void {}
}
