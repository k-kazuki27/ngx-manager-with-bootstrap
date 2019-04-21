import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { ReactiveFormsModule } from '@angular/forms'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { RouterTestingModule } from '@angular/router/testing'
import { CustomPaginationModule, DropdownPageLinesModule, PageHeaderModule } from 'src/app/shared'
import { ConfirmModule } from 'src/app/shared/modals/confirm/confirm.module'

import { UserListComponent } from './user-list.component'

describe('UserListComponent', () => {
  let component: UserListComponent
  let fixture: ComponentFixture<UserListComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UserListComponent],
      imports: [
        BrowserAnimationsModule,
        RouterTestingModule,
        ReactiveFormsModule,
        PageHeaderModule,
        DropdownPageLinesModule,
        CustomPaginationModule,
        ConfirmModule
      ]
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(UserListComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
