import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup } from '@angular/forms'
import { Router } from '@angular/router'
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

  constructor(private fb: FormBuilder, private router: Router) {}

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

  selectPageLines(lines: number) {}

  create() {
    this.router.navigate(['/user/detail'])
  }
  edit(id: number) {
    this.router.navigate(['/user/detail', id])
  }
  remove() {}
}
