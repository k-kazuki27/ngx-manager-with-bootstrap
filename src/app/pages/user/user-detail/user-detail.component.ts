import { Component, OnDestroy, OnInit } from '@angular/core'
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'
import { ActivatedRoute } from '@angular/router'
import { Subject } from 'rxjs'
import { takeUntil } from 'rxjs/operators'
import { routerTransition } from 'src/app/router.animations'
import { ConfirmService, UserApi } from 'src/app/shared'

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss'],
  animations: [routerTransition()]
})
export class UserDetailComponent implements OnInit, OnDestroy {
  form: FormGroup

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

    const id = Number(this.route.snapshot.params.id)
    if (id) {
      this.userApi.getUser(id, 'body', true).subscribe(res => {
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

  edit(): void {
    this.confirmService
      .openEditConfirm()
      .pipe(takeUntil(this.onDestroy$))
      .subscribe(result => {
        if (result) {
          history.back()
        }
      })
  }
  cancel() {
    history.back()
  }
}
