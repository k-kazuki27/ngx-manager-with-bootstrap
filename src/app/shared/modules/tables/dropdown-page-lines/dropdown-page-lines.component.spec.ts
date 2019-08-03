import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { DropdownPageLinesComponent } from './dropdown-page-lines.component'

describe('DropdownPageLinesComponent', () => {
  let component: DropdownPageLinesComponent
  let fixture: ComponentFixture<DropdownPageLinesComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DropdownPageLinesComponent]
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownPageLinesComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
