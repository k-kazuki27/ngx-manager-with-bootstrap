import { ScrollingModule } from '@angular/cdk/scrolling'
import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { FormsModule } from '@angular/forms'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgSelectModule } from '@ng-select/ng-select'
import { TabsModule, TypeaheadModule } from 'ngx-bootstrap'
import { FileUploadModule, InputDropdownModule, ReusableFormModule } from 'src/app/shared'
import { SharedModule } from 'src/app/shared/shared.module'

import { BsComponentComponent } from './bs-component.component'

describe('BsComponentComponent', () => {
  let component: BsComponentComponent
  let fixture: ComponentFixture<BsComponentComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BsComponentComponent],
      imports: [
        FormsModule,
        NgSelectModule,
        SharedModule,
        InputDropdownModule,
        TabsModule.forRoot(),
        TypeaheadModule.forRoot(),
        FileUploadModule,
        ReusableFormModule,
        ScrollingModule,
        BrowserAnimationsModule
      ]
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
