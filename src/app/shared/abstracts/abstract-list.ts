import { Page } from '../models'

export abstract class AbstractList {
  // カラム指定なしだと逆になるので、reverse=true
  order = ''
  reverse = true

  currentPage = 1
  totalItems = 100
  fromItem = 1
  toItem = 25

  constructor() {}

  abstract search(): void

  changePageLines(lines: number): void {
    this.search()
  }

  setOrder(value: string, isSort: boolean): void {
    if (!isSort) {
      return
    }

    if (this.order === value) {
      this.reverse = !this.reverse
    } else {
      this.reverse = false
    }

    this.order = value
  }

  pageChanged(page: Page) {
    this.currentPage = page.currentPage
  }
}
