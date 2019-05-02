import { Page } from '../models'

export abstract class AbstractList {
  // カラム指定なしだと逆になるので、reverse=true
  order = ''
  reverse = true

  itemsPerPage = 25
  currentPage = 1
  totalItems = 0
  fromItem = 1
  toItem = 1

  constructor() {}

  abstract search(doPageReset?: boolean): Promise<any>

  changePageLines(lines: number): void {
    this.itemsPerPage = lines
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

  pageChanged(page: Page): void {
    // currentPageに値を設定することによって発火するイベントをスルー
    if (this.currentPage === page.currentPage) {
      return
    }
    this.search().then(() => {
      this.currentPage = page.currentPage
      this.fromItem = this.itemsPerPage * (this.currentPage - 1) + 1
      const maxToItem = this.itemsPerPage * this.currentPage
      this.toItem = this.totalItems < maxToItem ? this.totalItems : maxToItem
    })
  }

  protected resetPage() {
    this.currentPage = 1
    this.fromItem = 1
    this.toItem =
      this.totalItems < this.itemsPerPage ? this.totalItems : this.itemsPerPage
  }
}