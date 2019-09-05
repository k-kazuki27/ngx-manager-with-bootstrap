import { Component, OnDestroy, OnInit } from '@angular/core'
import { ActivatedRoute, ParamMap, Router } from '@angular/router'
import { BehaviorSubject, Observable, Subject } from 'rxjs'
import { finalize, map, switchMap, takeUntil, tap } from 'rxjs/operators'
import { routerTransition } from 'src/app/router.animations'
import {
  AbstractList,
  ConfirmService,
  Page,
  TableHeader,
  UserApi,
  UserDTO,
  UsersDTO
} from 'src/app/shared'

import { USER_LIST_HEADER, UserSearchParam } from '../user-shared'

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
  animations: [routerTransition()]
})
export class UserListComponent extends AbstractList
  implements OnInit, OnDestroy {
  list$!: Observable<UserDTO[]>
  headers: TableHeader[] = USER_LIST_HEADER
  searchParam: UserSearchParam = {
    email: null,
    lastName: null,
    firstName: null
  }

  private search$ = new BehaviorSubject<UserSearchParam>(this.searchParam)
  private onDestroy$ = new Subject()

  constructor(
    private router: Router,
    private confirmService: ConfirmService,
    private route: ActivatedRoute,
    private userApi: UserApi
  ) {
    super()
  }

  ngOnInit() {
    const paramMap: ParamMap = this.route.snapshot.paramMap
    this.searchParam = {
      email: paramMap.get('email'),
      lastName: paramMap.get('lastName'),
      firstName: paramMap.get('firstName')
    }

    this.currentPage = Number(paramMap.get('currentPage') || 1)
    this.itemsPerPage = Number(paramMap.get('itemsPerPage') || 25)

    this.list$ = this.search$.asObservable().pipe(
      switchMap(param => {
        return this.findUsers(param)
      })
    )
  }

  ngOnDestroy() {
    this.onDestroy$.next()
  }

  search(searchParam: UserSearchParam): void {
    const page: Page = {
      currentPage: this.currentPage,
      itemsPerPage: this.itemsPerPage
    }

    this.router.navigate([], {
      queryParams: {
        ...searchParam,
        ...page
      }
    })

    this.search$.next(searchParam)
  }

  private findUsers(param: UserSearchParam): Observable<UserDTO[]> {
    return this.userApi
      .findUsers(this.fromItem, this.toItem, '', '', 'body', true)
      .pipe(
        tap((res: UsersDTO) => (this.totalItems = res.totalItems || 0)),
        map((res: UsersDTO) => res.users || []),
        finalize(() => {
          this.setPaging()
        })
      )
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
              // this.search()
            })
        }
      })
  }
}
