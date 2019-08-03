import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { TooltipModule } from 'ngx-bootstrap'

import { QuestionTooltipComponent } from './question-tooltip.component'

describe('QuestionTooltipComponent', () => {
  let component: QuestionTooltipComponent
  let fixture: ComponentFixture<QuestionTooltipComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [QuestionTooltipComponent],
      imports: [TooltipModule.forRoot()]
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionTooltipComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
