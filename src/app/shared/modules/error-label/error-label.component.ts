import { Component, Input, OnInit } from '@angular/core'
import { FormControl } from '@angular/forms'

import { REG_EXP_HALF_ALPHA_NUM_SYMBOL } from '../../constants'

const ERROR_MAP = new Map<string, string>([
  ['required', '必須です。'],
  ['email', '正しいメールアドレスの形式で入力してください。'],
  ['bsDate', '日付を入力してください。'],
  ['minlength', '{0}文字以上で入力してください。'],
  ['maxlength', '{0}文字以下で入力してください。'],
  ['uniqueUserId', '指定のユーザIDは、既に登録されています。'],
  ['samePassword', 'パスワードが一致しません。']
])

@Component({
  selector: 'app-error-label',
  templateUrl: './error-label.component.html',
  styleUrls: ['./error-label.component.scss']
})
export class ErrorLabelComponent implements OnInit {
  @Input()
  form!: FormControl

  constructor() {}

  ngOnInit() {}

  getErrorMessage(): string | null {
    if (!this.form || !this.form.errors) {
      return null
    }

    for (const field of Object.keys(this.form.errors)) {
      const error = this.form.errors[field]
      if (error) {
        if (field === 'minlength' || field === 'maxlength') {
          return this.stringFormat(ERROR_MAP.get(field), [error.requiredLength])
        }

        if (field === 'pattern') {
          if (error.requiredPattern === REG_EXP_HALF_ALPHA_NUM_SYMBOL) {
            return '半角英数字記号で入力してください。'
          }
        }
        return ERROR_MAP.get(field) || null
      }
    }
    return null
  }

  private stringFormat(str: string | undefined, args: string[]): string | null {
    if (typeof str === 'undefined') {
      return null
    }
    const replaceFn = (m: string, k: string): string => args[Number(k)]
    return str.replace(/\{(\w+)\}/g, replaceFn)
  }
}
