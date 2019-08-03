import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms'

import { InputDropdownComponent } from './input-dropdown.component'

describe('InputDropdownComponent', () => {
  let component: InputDropdownComponent
  let fixture: ComponentFixture<InputDropdownComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [InputDropdownComponent]
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(InputDropdownComponent)
    component = fixture.componentInstance
    component.parentForm = new FormGroup({
      test: new FormControl()
    })
    component.controlName = 'test'
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
