import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { FormsModule } from '@angular/forms'
import { NgSelectModule } from '@ng-select/ng-select'

import { BsComponentComponent } from './bs-component.component'

describe('BsComponentComponent', () => {
  let component: BsComponentComponent
  let fixture: ComponentFixture<BsComponentComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BsComponentComponent],
      imports: [FormsModule, NgSelectModule]
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(BsComponentComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
