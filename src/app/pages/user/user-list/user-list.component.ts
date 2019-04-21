import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router'
import { NgxSpinnerService } from 'ngx-spinner'
import { routerTransition } from 'src/app/router.animations'
import { AbstractList, ConfirmService, TableHeader, User } from 'src/app/shared'

const USERS: User[] = [
  {
    userId: 'a',
    email: 'a@a.com',
    lastName: '田中',
    firstName: '一郎'
  },
  {
    userId: 'c',
    email: 'c@c.com',
    lastName: '田中',
    firstName: '三郎'
  },
  {
    userId: 'b',
    email: 'b@b.com',
    lastName: '田中',
    firstName: '二郎'
  }
]

const TABLE_HEADER: TableHeader[] = [
  {
    isButton: true,
    isSort: false
  },
  {
    isButton: false,
    isSort: true,
    key: 'userId',
    name: 'ユーザID'
  },
  {
    isButton: false,
    isSort: true,
    key: 'email',
    name: 'メールアドレス'
  },
  {
    isButton: false,
    isSort: true,
    key: 'lastName',
    name: '名前（姓）'
  },
  {
    isButton: false,
    isSort: true,
    key: 'firstName',
    name: '名前（名）'
  },
  {
    isButton: true,
    isSort: false
  }
]

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
  animations: [routerTransition()]
})
export class UserListComponent extends AbstractList implements OnInit {
  searchForm: FormGroup
  showAdvance = false

  totalItems = 100
  fromItemNo = 1
  toItemNo = 25
  list: User[] = USERS
  headers: TableHeader[] = TABLE_HEADER

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private spinner: NgxSpinnerService,
    private confirmService: ConfirmService,
    private route: ActivatedRoute
  ) {
    super()
  }

  ngOnInit() {
    this.searchForm = this.fb.group({
      email: [null],
      lastName: [null],
      firstName: [null]
    })
  }

  //
  // 検索
  //
  openAdvance(): void {
    this.showAdvance = !this.showAdvance
  }
  search(): void {
    this.spinner.show()
    setTimeout(() => {
      this.spinner.hide()
    }, 2000)
  }
  reset(): void {
    this.searchForm.reset()
  }

  //
  // 一覧
  //
  selectPageLines(lines: number): void {
    this.search()
  }
  create(): void {
    this.router.navigate(['detail'], { relativeTo: this.route })
  }
  edit(id: number): void {
    this.router.navigate(['detail', id], { relativeTo: this.route })
  }
  remove(): void {
    this.confirmService.openRemoveConfirm()
  }
}
