import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms'
import { BsDatepickerModule } from 'ngx-bootstrap'

import { DateInputComponent } from './date-input.component'

describe('DateInputComponent', () => {
  let component: DateInputComponent
  let fixture: ComponentFixture<DateInputComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DateInputComponent],
      imports: [ReactiveFormsModule, BsDatepickerModule.forRoot()],
      providers: []
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(DateInputComponent)
    component = fixture.componentInstance
    component.parentForm = new FormGroup({
      birthday: new FormControl()
    })
    component.controlName = 'birthday'
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
