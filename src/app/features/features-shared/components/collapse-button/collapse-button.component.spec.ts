import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { FeaturesServiceModule } from '../../services/features-service.module'
import { CollapseButtonComponent } from './collapse-button.component'

describe('CollapseButtonComponent', () => {
  let component: CollapseButtonComponent
  let fixture: ComponentFixture<CollapseButtonComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CollapseButtonComponent],
      imports: [FeaturesServiceModule]
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(CollapseButtonComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
