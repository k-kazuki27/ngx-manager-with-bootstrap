import { DatePipe } from '@angular/common'
import { Component, OnDestroy, OnInit } from '@angular/core'
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'
import { ActivatedRoute } from '@angular/router'
import { Subject } from 'rxjs'
import { takeUntil } from 'rxjs/operators'
import { routerTransition } from 'src/app/router.animations'
import {
  ConfirmService,
  REG_EXP_HALF_ALPHA_NUM_SYMBOL,
  UserApi,
  UserDTO
} from 'src/app/shared'

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss'],
  animations: [routerTransition()]
})
export class UserDetailComponent implements OnInit, OnDestroy {
  form: FormGroup
  formGroupClass = 'form-group row align-items-center'
  labelClass = 'col-sm-3 col-form-label col-form-label-sm'
  inputClass = 'form-control form-control-sm col-sm-9'
  errorLabelClass = 'offset-sm-3 col-sm-9'

  private id: number
  private onDestroy$ = new Subject()

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private confirmService: ConfirmService,
    private userApi: UserApi,
    private datePipe: DatePipe
  ) {}

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
      this.form.addControl(
        'password',
        new FormControl({ value: null }, [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(64)
        ])
      )
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
        ]
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

  get userId(): FormControl {
    return this.form.get('userId') as FormControl
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

  register(): void {
    this.confirmService
      .openEditConfirm()
      .pipe(takeUntil(this.onDestroy$))
      .subscribe(result => {
        if (result) {
          const user: UserDTO = {
            id: this.id,
            userId: this.userId.value,
            lastName: this.lastName.value,
            firstName: this.firstName.value,
            birthday: this.datePipe.transform(this.birthday.value, 'yyyy-MM-dd')
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

  cancel() {
    history.back()
  }
}
