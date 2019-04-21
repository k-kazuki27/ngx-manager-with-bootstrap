import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { PagesResolverModule } from '../../services/pages-resolver.module'
import { CollapseButtonComponent } from './collapse-button.component'

describe('CollapseButtonComponent', () => {
  let component: CollapseButtonComponent
  let fixture: ComponentFixture<CollapseButtonComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CollapseButtonComponent],
      imports: [PagesResolverModule]
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
