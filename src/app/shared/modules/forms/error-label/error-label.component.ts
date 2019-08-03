import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit
} from '@angular/core'
import { ValidationErrors } from '@angular/forms'

import { REG_EXP_HALF_ALPHA_NUM_SYMBOL } from '../../../constants'

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
  styleUrls: ['./error-label.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ErrorLabelComponent implements OnInit {
  @Input()
  set errors(errors: ValidationErrors) {
    if (errors === undefined || errors === null) {
      this.errorMessage = null
    } else {
      for (const field of Object.keys(errors)) {
        const error = errors[field]
        if (error) {
          switch (field) {
            case 'minlength':
            case 'maxlength':
              this.errorMessage = this.stringFormat(ERROR_MAP.get(field), [
                error.requiredLength
              ])
              break
            case 'pattern':
              if (error.requiredPattern === REG_EXP_HALF_ALPHA_NUM_SYMBOL) {
                this.errorMessage = '半角英数字記号で入力してください。'
              }
              break
            default:
              this.errorMessage = ERROR_MAP.get(field) || null
          }
        }
      }
    }
  }

  errorMessage: string | null = null

  constructor() {}

  ngOnInit() {}

  private stringFormat(str: string | undefined, args: string[]): string | null {
    if (typeof str === 'undefined') {
      return null
    }
    const replaceFn = (m: string, k: string): string => args[Number(k)]
    return str.replace(/\{(\w+)\}/g, replaceFn)
  }
}
