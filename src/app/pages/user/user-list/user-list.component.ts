import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup } from '@angular/forms'
import { routerTransition } from 'src/app/router.animations'

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
  animations: [routerTransition()]
})
export class UserListComponent implements OnInit {
  searchForm: FormGroup
  totalItems = 100
  fromItemNo = 1
  toItemNo = 25
  showAdvance = false

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.searchForm = this.fb.group({
      email: [null],
      lastName: [null],
      firstName: [null]
    })
  }

  openAdvance() {
    this.showAdvance = !this.showAdvance
  }
  search() {}

  reset() {
    this.searchForm.reset()
  }

  selectPageLines(lines: number) {
    console.log(lines)
  }
}
