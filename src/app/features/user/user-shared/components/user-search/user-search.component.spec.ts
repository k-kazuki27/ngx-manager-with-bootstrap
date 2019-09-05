import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { SharedModule } from 'src/app/shared/shared.module'

import { UserSearchComponent } from './user-search.component'

describe('UserSearchComponent', () => {
  let component: UserSearchComponent
  let fixture: ComponentFixture<UserSearchComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UserSearchComponent],
      imports: [SharedModule]
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSearchComponent)
    component = fixture.componentInstance
    component.searchParam = { email: null, lastName: null, firstName: null }
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
