import { DatePipe } from '@angular/common'
import { Component, OnDestroy, OnInit } from '@angular/core'
import { FormBuilder, FormControl, Validators } from '@angular/forms'
import { ActivatedRoute } from '@angular/router'
import { Subject } from 'rxjs'
import { takeUntil } from 'rxjs/operators'
import { routerTransition } from 'src/app/router.animations'
import {
  AbstractDetail,
  ApplicationError,
  ConfirmService,
  REG_EXP_HALF_ALPHA_NUM_SYMBOL,
  UserApi,
  UserDTO
} from 'src/app/shared'
import { UserValidator } from '../user-shared'

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss'],
  animations: [routerTransition()]
})
export class UserDetailComponent extends AbstractDetail
  implements OnInit, OnDestroy {
  private onDestroy$ = new Subject()

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private confirmService: ConfirmService,
    private userApi: UserApi,
    private datePipe: DatePipe
  ) {
    super()
  }

  ngOnInit() {
    this.buildForm()

    this.id = Number(this.route.snapshot.params.id)
    if (this.id) {
      this.userApi
        .getUser(this.id, 'body', true)
        .pipe(takeUntil(this.onDestroy$))
        .subscribe(res => {
          this.form.patchValue({
            userId: res.userId,
            email: res.email,
            lastName: res.lastName,
            firstName: res.firstName,
            birthday: res.birthday ? new Date(res.birthday) : null
          })
        })
    } else {
      this.buildPasswordForm()
    }
  }

  ngOnDestroy() {
    this.onDestroy$.next()
  }

  private buildForm(): void {
    this.form = this.fb.group({
      userId: [
        null,
        [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(64),
          Validators.pattern(REG_EXP_HALF_ALPHA_NUM_SYMBOL)
        ],
        [UserValidator.uniqueUserId(this.userApi)],
        'blur'
      ],
      email: [
        null,
        [Validators.required, Validators.email, Validators.maxLength(64)]
      ],
      lastName: [null, [Validators.required, Validators.maxLength(32)]],
      firstName: [null, [Validators.required, Validators.maxLength(32)]],
      birthday: [null]
    })
  }

  private buildPasswordForm(): void {
    if (!this.form) {
      throw new ApplicationError(
        'Logic Error：buildFormを先に実行する必要があります。'
      )
    }

    this.form.addControl(
      'password',
      new FormControl(null, [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(64),
        Validators.pattern(REG_EXP_HALF_ALPHA_NUM_SYMBOL)
      ])
    )
    this.form.addControl(
      'confirmPassword',
      new FormControl(null, [UserValidator.samePassword(this.password)])
    )
  }

  register(): void {
    this.confirmService
      .openEditConfirm()
      .pipe(takeUntil(this.onDestroy$))
      .subscribe(result => {
        if (result) {
          const user: UserDTO = {
            id: this.id || undefined,
            userId: this.userId.value,
            lastName: this.lastName.value,
            firstName: this.firstName.value,
            birthday:
              this.datePipe.transform(this.birthday.value, 'yyyy-MM-dd') || ''
          }
          console.log(user)
          if (this.id) {
            this.edit(user)
          } else {
            this.create(user)
          }
        }
      })
  }

  private create(user: UserDTO): void {
    this.userApi
      .createUser(user, 'body', true)
      .pipe(takeUntil(this.onDestroy$))
      .subscribe(() => {
        history.back()
      })
  }

  private edit(user: UserDTO): void {
    this.userApi
      .editUser(user, 'body', true)
      .pipe(takeUntil(this.onDestroy$))
      .subscribe(() => {
        history.back()
      })
  }

  get userId(): FormControl {
    return this.form.get('userId') as FormControl
  }
  get password(): FormControl {
    return this.form.get('password') as FormControl
  }
  get confirmPassword(): FormControl {
    return this.form.get('confirmPassword') as FormControl
  }
  get email(): FormControl {
    return this.form.get('email') as FormControl
  }
  get lastName(): FormControl {
    return this.form.get('lastName') as FormControl
  }
  get firstName(): FormControl {
    return this.form.get('firstName') as FormControl
  }
  get birthday(): FormControl {
    return this.form.get('birthday') as FormControl
  }
}
