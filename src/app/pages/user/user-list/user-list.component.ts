import { Component, OnDestroy, OnInit } from '@angular/core'
import { FormBuilder, FormGroup } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router'
import { NgxSpinnerService } from 'ngx-spinner'
import { Observable, Subject } from 'rxjs'
import { delay, finalize, map, takeUntil, tap } from 'rxjs/operators'
import { routerTransition } from 'src/app/router.animations'
import {
  AbstractList,
  ConfirmService,
  TableHeader,
  USER_LIST_HEADER,
  UserApi,
  UserDTO,
  UsersDTO
} from 'src/app/shared'

import { UserService } from '../services/user.service'

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

  list$: Observable<UserDTO[]>
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

    this.search()
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

  search(): Promise<any> {
    return new Promise(resolve => {
      this.spinner.show()
      this.list$ = this.userApi.findUsers(1, 2).pipe(
        delay(new Date(Date.now() + 1000)), // 意図的に遅延
        tap((res: UsersDTO) => (this.totalItems = res.totalItems)),
        map((res: UsersDTO) => res.users),
        finalize(() => {
          this.resetPage()
          this.userService.searchForm = this.searchForm
          this.spinner.hide()
          resolve()
        })
      )
    })
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
