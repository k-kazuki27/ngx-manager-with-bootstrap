import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup } from '@angular/forms'
import { Router } from '@angular/router'
import { routerTransition } from 'src/app/router.animations'

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss'],
  animations: [routerTransition()]
})
export class UserDetailComponent implements OnInit {
  form: FormGroup

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit() {
    this.form = this.fb.group({
      email: [null],
      lastName: [null],
      firstName: [null]
    })
  }

  edit() {}
  cancel() {
    this.router.navigate(['/user'])
  }
}
