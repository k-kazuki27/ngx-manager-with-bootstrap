import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { RouterTestingModule } from '@angular/router/testing'
import { SharedModule } from 'src/app/shared/shared.module'

import { UserDetailComponent } from './user-detail.component'

describe('UserDetailComponent', () => {
  let component: UserDetailComponent
  let fixture: ComponentFixture<UserDetailComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UserDetailComponent],
      imports: [HttpClientModule,BrowserAnimationsModule, RouterTestingModule, SharedModule]
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
