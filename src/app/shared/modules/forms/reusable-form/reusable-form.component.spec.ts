import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { ReusableFormComponent } from './reusable-form.component'

describe('ReusableFormComponent', () => {
  let component: ReusableFormComponent
  let fixture: ComponentFixture<ReusableFormComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ReusableFormComponent],
      imports: [FormsModule, ReactiveFormsModule]
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(ReusableFormComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
