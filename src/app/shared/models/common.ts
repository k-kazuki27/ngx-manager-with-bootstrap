export interface TableHeader {
  isButton: boolean
  isSort: boolean
  key?: string
  name?: string
}

export interface Page {
  currentPage: number
  toLine: number
  fromLine: number
}
