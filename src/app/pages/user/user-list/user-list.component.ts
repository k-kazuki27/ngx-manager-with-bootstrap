import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup } from '@angular/forms'
import { Router } from '@angular/router'
import { NgxSpinnerService } from 'ngx-spinner'
import { routerTransition } from 'src/app/router.animations'
import { ConfirmService } from 'src/app/shared/modals/confirm/confirm.service'

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

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private spinner: NgxSpinnerService,
    private confirmService: ConfirmService
  ) {}

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
  search() {
    this.spinner.show()

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide()
    }, 2000)
  }

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
  remove() {
    this.confirmService.openModal()
  }
}
