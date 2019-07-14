import { HttpClientModule } from '@angular/common/http'
import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing'
import { BsDropdownModule } from 'ngx-bootstrap'

import { CollapseButtonComponent } from './components/collapse-button/collapse-button.component'
import { HeaderComponent } from './components/header/header.component'
import { SidebarComponent } from './components/sidebar/sidebar.component'
import { PagesComponent } from './pages.component'
import { PagesResolverModule } from './services/pages-resolver.module'

describe('PagesComponent', () => {
  let component: PagesComponent
  let fixture: ComponentFixture<PagesComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PagesComponent,
        HeaderComponent,
        SidebarComponent,
        CollapseButtonComponent
      ],
      imports: [
        HttpClientModule,
        RouterTestingModule,
        PagesResolverModule,
        BsDropdownModule.forRoot()
      ]
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(PagesComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
