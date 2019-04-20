import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup } from '@angular/forms'
import { Router } from '@angular/router'
import { routerTransition } from 'src/app/router.animations'
import { ConfirmService } from 'src/app/shared/modals/confirm/confirm.service'

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss'],
  animations: [routerTransition()]
})
export class UserDetailComponent implements OnInit {
  form: FormGroup

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private confirmService: ConfirmService
  ) {}

  ngOnInit() {
    this.form = this.fb.group({
      email: [null],
      lastName: [null],
      firstName: [null]
    })
  }

  edit() {
    this.confirmService.openEditConfirm()
  }
  cancel() {
    this.router.navigate(['/user'])
  }
}
