import { HttpClientModule, HttpResponse } from '@angular/common/http'
import { Type } from '@angular/core'
import {
  async,
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick
} from '@angular/core/testing'
import { FormGroup } from '@angular/forms'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { ActivatedRoute } from '@angular/router'
import { RouterTestingModule } from '@angular/router/testing'
import { of } from 'rxjs'
import { ApplicationError, UserApi } from 'src/app/shared'
import { DUMMY_USER } from 'src/app/shared/mock'
import { SharedModule } from 'src/app/shared/shared.module'

import { UserDetailComponent } from './user-detail.component'

describe('UserDetailComponent', () => {
  let target: UserDetailComponent
  let fixture: ComponentFixture<UserDetailComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UserDetailComponent],
      imports: [
        HttpClientModule,
        BrowserAnimationsModule,
        RouterTestingModule,
        SharedModule
      ]
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDetailComponent)
    target = fixture.debugElement.componentInstance
    // fixture.detectChanges()
  })

  test('Test ngOnInit', async(() => {
    const buildFormSpy = jest.spyOn(target as any, 'buildForm')
    const buildPasswordFormSpy = jest.spyOn(target as any, 'buildPasswordForm')
    fixture.detectChanges()

    expect(buildFormSpy).toHaveBeenCalledTimes(1)
    expect(buildPasswordFormSpy).toHaveBeenCalledTimes(1)
  }))

  test('Test ngOnInit routeParamあり', fakeAsync(() => {
    const buildFormSpy = jest.spyOn(target as any, 'buildForm')
    const buildPasswordFormSpy = jest.spyOn(target as any, 'buildPasswordForm')
    const route: ActivatedRoute = TestBed.get(ActivatedRoute as Type<
      ActivatedRoute
    >)
    route.snapshot.params = { id: '1' }

    const userApi: UserApi = TestBed.get(UserApi as Type<UserApi>)
    const userApiSpy = jest.spyOn(userApi, 'getUser')
    userApiSpy.mockReturnValue(
      of(
        new HttpResponse({
          status: 200,
          body: DUMMY_USER
        })
      )
    )

    fixture.detectChanges()
    tick()
    expect(buildFormSpy).toHaveBeenCalledTimes(1)
    expect(buildPasswordFormSpy).toHaveBeenCalledTimes(0)
    expect(userApiSpy).toHaveBeenCalledTimes(1)

    const controls = target.form.controls
    expect(controls.userId).toBeDefined()
    expect(controls.password).toBeUndefined()

    expect(target.id).toEqual(1)
    fixture.whenStable().then(() => {
      expect(target.userId.value).toEqual('z0001')
    })
  }))

  test('Test buildForm', async(() => {
    // プライベートメソッドへのアクセス
    // tslint:disable-next-line:no-string-literal
    target['buildForm']()
    const controls = target.form.controls

    expect(controls.userId).toBeDefined()
    expect(controls.email).toBeDefined()
    expect(controls.lastName).toBeDefined()
    expect(controls.firstName).toBeDefined()
    expect(controls.birthday).toBeDefined()

    expect(controls.password).toBeUndefined()
    expect(controls.confirmPassword).toBeUndefined()
  }))

  test('Test buildPasswordForm', async(() => {
    expect(() => {
      // tslint:disable-next-line:no-string-literal
      target['buildPasswordForm']()
    }).toThrow(ApplicationError)

    target.form = new FormGroup({})

    // tslint:disable-next-line:no-string-literal
    target['buildPasswordForm']()
    const controls = target.form.controls

    expect(controls.password).toBeDefined()
    expect(controls.confirmPassword).toBeDefined()

    expect(controls.userId).toBeUndefined()
  }))
})
