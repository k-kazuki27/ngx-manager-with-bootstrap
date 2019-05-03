import { Component, OnDestroy, OnInit } from '@angular/core'
import { FormBuilder, FormGroup } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router'
import { BehaviorSubject, Observable, Subject } from 'rxjs'
import { finalize, map, switchMap, takeUntil, tap } from 'rxjs/operators'
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

  private search$ = new BehaviorSubject(null)
  private onDestroy$ = new Subject()

  constructor(
    private fb: FormBuilder,
    private router: Router,
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

    if (this.userService.searchPage) {
      this.currentPage = this.userService.searchPage.currentPage
      this.itemsPerPage = this.userService.searchPage.itemsPerPage
    }

    this.list$ = this.search$.asObservable().pipe(
      switchMap(() => {
        return this.findUsers()
      })
    )
  }

  ngOnDestroy() {
    this.onDestroy$.next()
  }

  private findUsers(): Observable<UserDTO[]> {
    return this.userApi.findUsers(1, 2, null, null, 'body', true).pipe(
      tap((res: UsersDTO) => (this.totalItems = res.totalItems)),
      map((res: UsersDTO) => res.users),
      finalize(() => {
        this.setPaging()
        this.userService.saveSearch(this.searchForm, {
          currentPage: this.currentPage,
          itemsPerPage: this.itemsPerPage
        })
      })
    )
  }

  //
  // 検索
  //
  openAdvance(): void {
    this.showAdvance = !this.showAdvance
  }

  search(doPageReset?: boolean): void {
    if (doPageReset) {
      this.currentPage = 1
    }
    this.search$.next(null)
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
          this.userApi
            .removeUser(id, 'body', true)
            .pipe(takeUntil(this.onDestroy$))
            .subscribe(() => {
              this.search()
            })
        }
      })
  }
}
