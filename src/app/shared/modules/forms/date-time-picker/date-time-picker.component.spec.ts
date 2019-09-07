import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { BsDatepickerModule, TimepickerModule } from 'ngx-bootstrap'

import { DateTimePickerComponent } from './date-time-picker.component'

describe('DateTimePickerComponent', () => {
  let component: DateTimePickerComponent
  let fixture: ComponentFixture<DateTimePickerComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DateTimePickerComponent],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        BsDatepickerModule.forRoot(),
        TimepickerModule.forRoot()
      ]
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(DateTimePickerComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
