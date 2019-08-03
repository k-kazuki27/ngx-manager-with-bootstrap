import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { FormsModule } from '@angular/forms'
import { PaginationModule } from 'ngx-bootstrap'

import { CustomPaginationComponent } from './custom-pagination.component'

describe('CustomPaginationComponent', () => {
  let component: CustomPaginationComponent
  let fixture: ComponentFixture<CustomPaginationComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CustomPaginationComponent],
      imports: [FormsModule, PaginationModule.forRoot()]
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomPaginationComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
