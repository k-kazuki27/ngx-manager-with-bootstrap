import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { DateFormsModule } from '../../..'
import { DatePickerComponent } from './date-picker.component'

describe('DatePickerComponent', () => {
  let component: DatePickerComponent
  let fixture: ComponentFixture<DatePickerComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [DateFormsModule]
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(DatePickerComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
