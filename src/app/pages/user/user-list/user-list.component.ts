import { Component, OnDestroy, OnInit } from '@angular/core'
import { FormBuilder, FormGroup } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router'
import { NgxSpinnerService } from 'ngx-spinner'
import { Observable, Subject } from 'rxjs'
import { map, takeUntil } from 'rxjs/operators'
import { routerTransition } from 'src/app/router.animations'
import {
  AbstractList,
  ConfirmService,
  TableHeader,
  User,
  USER_LIST_HEADER,
  UserApi,
  UserResponseDTO
} from 'src/app/shared'

import { UserService } from '../services/user.service'

const USERS: User[] = [
  {
    id: 1,
    userId: 'a',
    email: 'a@a.com',
    lastName: '田中',
    firstName: '一郎'
  },
  {
    id: 2,
    userId: 'c',
    email: 'c@c.com',
    lastName: '田中',
    firstName: '三郎'
  },
  {
    id: 3,
    userId: 'b',
    email: 'b@b.com',
    lastName: '田中',
    firstName: '二郎'
  }
]

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
  animations: [routerTransition()]
})
export class UserListComponent extends AbstractList
  implements OnInit, OnDestroy {
  searchForm: FormGroup
  showAdvance = false

  list: User[] = USERS
  list$: Observable<Array<UserResponseDTO>>
  headers: TableHeader[] = USER_LIST_HEADER

  private onDestroy$ = new Subject()

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private spinner: NgxSpinnerService,
    private confirmService: ConfirmService,
    private route: ActivatedRoute,
    private userService: UserService,
    private userApi: UserApi
  ) {
    super()
  }

  ngOnInit() {
    if (!this.userService.searchForm) {
      this.searchForm = this.fb.group({
        email: [null],
        lastName: [null],
        firstName: [null]
      })
    } else {
      this.searchForm = this.userService.searchForm
    }

    this.list$ = this.userApi.finfUsers().pipe(map(res => res))
  }

  ngOnDestroy() {
    this.onDestroy$.next()
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
      this.currentPage = 1
      this.userService.searchForm = this.searchForm
    }, 1000)
  }
  reset(): void {
    this.searchForm.reset()
  }

  //
  // 一覧
  //
  create(): void {
    this.router.navigate(['detail'], { relativeTo: this.route })
  }
  edit(id: number): void {
    this.router.navigate(['detail', id], { relativeTo: this.route })
  }
  remove(id: number): void {
    this.confirmService
      .openRemoveConfirm()
      .pipe(takeUntil(this.onDestroy$))
      .subscribe(result => {
        if (result) {
        }
      })
  }
}
