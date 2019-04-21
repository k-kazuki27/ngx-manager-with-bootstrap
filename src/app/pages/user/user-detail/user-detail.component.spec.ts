import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { ReactiveFormsModule } from '@angular/forms'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { RouterTestingModule } from '@angular/router/testing'
import { BsDatepickerModule } from 'ngx-bootstrap'
import { PageHeaderModule } from 'src/app/shared'
import { ConfirmModule } from 'src/app/shared/modals/confirm/confirm.module'

import { UserDetailComponent } from './user-detail.component'

describe('UserDetailComponent', () => {
  let component: UserDetailComponent
  let fixture: ComponentFixture<UserDetailComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UserDetailComponent],
      imports: [
        BrowserAnimationsModule,
        RouterTestingModule,
        ReactiveFormsModule,
        PageHeaderModule,
        BsDatepickerModule.forRoot(),
        ConfirmModule
      ]
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDetailComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
