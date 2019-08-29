import { Page } from './../../../shared/models/common'
import { Component, OnDestroy, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, FormControl } from '@angular/forms'
import { ActivatedRoute, Router, ParamMap } from '@angular/router'
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

import { USER_LIST_HEADER, UserSearchParam } from '../user-shared'

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

  private search$ = new BehaviorSubject<UserSearchParam>({})
  private onDestroy$ = new Subject()

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private confirmService: ConfirmService,
    private route: ActivatedRoute,
    private userApi: UserApi
  ) {
    super()
  }

  ngOnInit() {
    this.searchForm = this.fb.group({
      email: [null],
      lastName: [null],
      firstName: [null]
    })

    const paramMap: ParamMap = this.route.snapshot.paramMap

    this.searchForm.patchValue({
      email: paramMap.get('email'),
      lastName: paramMap.get('lastName'),
      firstName: paramMap.get('firstName')
    })
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

  private findUsers(param: UserSearchParam): Observable<UserDTO[]> {
    return this.userApi
      .findUsers(
        this.fromItem,
        this.toItem,
        param.email,
        param.lastName,
        'body',
        true
      )
      .pipe(
        tap((res: UsersDTO) => (this.totalItems = res.totalItems || 0)),
        map((res: UsersDTO) => res.users || []),
        finalize(() => {
          this.setPaging()
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
    const param: UserSearchParam = {
      email: this.email.value,
      lastName: this.lastName.value,
      firstName: this.firstName.value
    }

    const page: Page = {
      currentPage: this.currentPage,
      itemsPerPage: this.itemsPerPage
    }

    this.router.navigate([], {
      queryParams: {
        ...param,
        ...page
      }
    })

    this.search$.next(param)
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

  get email(): FormControl {
    return this.searchForm.get('email') as FormControl
  }

  get lastName(): FormControl {
    return this.searchForm.get('lastName') as FormControl
  }

  get firstName(): FormControl {
    return this.searchForm.get('firstName') as FormControl
  }
}
