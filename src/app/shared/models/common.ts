export interface TableHeader {
  isButton: boolean
  isSort: boolean
  key?: string
  name?: string
}

export interface Page {
  pageNo: number
  countPerPage: number
}
