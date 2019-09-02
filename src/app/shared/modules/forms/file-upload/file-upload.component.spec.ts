import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { FileUploadComponent } from './file-upload.component'

describe('FileUploadComponent', () => {
  let component: FileUploadComponent
  let fixture: ComponentFixture<FileUploadComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FileUploadComponent],
      imports: [FormsModule, ReactiveFormsModule]
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(FileUploadComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
