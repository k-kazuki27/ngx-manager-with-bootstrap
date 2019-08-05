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
  UserApi,
  UserDTO,
  UsersDTO
} from 'src/app/shared'

import { USER_LIST_HEADER, UserStoreService } from '../user-shared'

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
  animations: [routerTransition()]
})
export class UserListComponent extends AbstractList
  implements OnInit, OnDestroy {
  searchForm!: FormGroup
  showAdvance = false

  list$!: Observable<UserDTO[]>
  headers: TableHeader[] = USER_LIST_HEADER

  private search$ = new BehaviorSubject(null)
  private onDestroy$ = new Subject()

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private confirmService: ConfirmService,
    private route: ActivatedRoute,
    private userStoreService: UserStoreService,
    private userApi: UserApi
  ) {
    super()
  }

  ngOnInit() {
    if (!this.userStoreService.searchForm) {
      this.searchForm = this.fb.group({
        email: [null],
        lastName: [null],
        firstName: [null]
      })
    } else {
      this.searchForm = this.userStoreService.searchForm
    }

    if (this.userStoreService.searchPage) {
      this.currentPage = this.userStoreService.searchPage.currentPage
      this.itemsPerPage = this.userStoreService.searchPage.itemsPerPage
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
    return this.userApi
      .findUsers(1, 2, undefined, undefined, 'body', true)
      .pipe(
        tap((res: UsersDTO) => (this.totalItems = res.totalItems || 0)),
        map((res: UsersDTO) => res.users || []),
        finalize(() => {
          this.setPaging()
          this.userStoreService.saveSearch(this.searchForm, {
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
