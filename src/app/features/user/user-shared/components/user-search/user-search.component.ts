import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { FormBuilder, FormControl, FormGroup } from '@angular/forms'

import { UserSearchParam } from '../../models/user'

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.scss']
})
export class UserSearchComponent implements OnInit {
  searchForm!: FormGroup
  showAdvance = false

  @Input()
  searchParam!: UserSearchParam

  @Output()
  searched = new EventEmitter<UserSearchParam>()

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.searchForm = this.fb.group({
      email: [null],
      lastName: [null],
      firstName: [null]
    })

    this.searchForm.patchValue({
      email: this.searchParam.email,
      lastName: this.searchParam.lastName,
      firstName: this.searchParam.firstName
    })
  }

  search(): void {
    const param: UserSearchParam = {
      email: this.email.value,
      lastName: this.lastName.value,
      firstName: this.firstName.value
    }

    this.searched.emit(param)
  }

  openAdvance(): void {
    this.showAdvance = !this.showAdvance
  }

  reset(): void {
    this.searchForm.reset()
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
