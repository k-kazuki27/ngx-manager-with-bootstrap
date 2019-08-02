import { HttpClientModule } from '@angular/common/http'
import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing'
import { BsDropdownModule } from 'ngx-bootstrap'

import {
  CollapseButtonComponent,
  FeaturesServiceModule,
  HeaderComponent,
  SidebarComponent
} from './features-shared'
import { FeaturesComponent } from './features.component'

describe('PagesComponent', () => {
  let component: FeaturesComponent
  let fixture: ComponentFixture<FeaturesComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        FeaturesComponent,
        HeaderComponent,
        SidebarComponent,
        CollapseButtonComponent
      ],
      imports: [
        HttpClientModule,
        RouterTestingModule,
        FeaturesServiceModule,
        BsDropdownModule.forRoot()
      ]
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturesComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
