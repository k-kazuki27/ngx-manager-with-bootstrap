import { Component, OnDestroy, OnInit } from '@angular/core'
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'
import { ActivatedRoute } from '@angular/router'
import { Subject } from 'rxjs'
import { takeUntil } from 'rxjs/operators'
import { routerTransition } from 'src/app/router.animations'
import { ConfirmService, UserApi, UserDTO } from 'src/app/shared'

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss'],
  animations: [routerTransition()]
})
export class UserDetailComponent implements OnInit, OnDestroy {
  form: FormGroup

  private id: number
  private onDestroy$ = new Subject()

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private confirmService: ConfirmService,
    private userApi: UserApi
  ) {}

  ngOnInit() {
    this.form = this.fb.group({
      email: [null, [Validators.required, Validators.maxLength(64)]],
      lastName: [null, [Validators.required, Validators.maxLength(16)]],
      firstName: [null, [Validators.required, Validators.maxLength(16)]],
      birthday: [null]
    })

    this.id = Number(this.route.snapshot.params.id)
    if (this.id) {
      this.userApi
        .getUser(this.id, 'body', true)
        .pipe(takeUntil(this.onDestroy$))
        .subscribe(res => {
          this.form.patchValue({
            email: res.email,
            lastName: res.lastName,
            firstName: res.firstName,
            birthday: new Date()
          })
        })
    }
  }

  ngOnDestroy() {
    this.onDestroy$.next()
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
            userId: '',
            lastName: ''
          }
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
