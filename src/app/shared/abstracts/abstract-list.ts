export abstract class AbstractList {
  // カラム指定なしだと逆になるので、reverse=true
  order = ''
  reverse = true

  itemsPerPage = 25
  pageNo = 1
  totalItems = 0
  fromItem = 1
  toItem = 1

  constructor() {}

  changeItemsPerPage(itemsPerPage: number): void {
    this.itemsPerPage = itemsPerPage
    // this.search(true)
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

  pageChanged(pageNo: number): void {
    // currentPageに値を設定することによって発火するイベントをスルー
    if (this.pageNo === pageNo) {
      return
    }
    this.pageNo = pageNo
    // this.search()
  }

  protected setPaging(): void {
    this.fromItem = this.itemsPerPage * (this.pageNo - 1) + 1
    const maxToItem = this.itemsPerPage * this.pageNo
    this.toItem = this.totalItems < maxToItem ? this.totalItems : maxToItem
  }
}
