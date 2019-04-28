export abstract class AbstractList {
  // カラム指定なしだと逆になるので、reverse=true
  order = ''
  reverse = true

  currentPage = 1

  constructor() {}

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

  pageChanged(current) {
    this.currentPage = current
  }
}
