import { AbstractList } from './abstract-list'

class TestClass {
  public static create() {
    return new (class extends AbstractList {
      search(doPageReset?: boolean): void {}
      constructor() {
        super()
      }
    })()
  }

  constructor(private value: string) {}
}

describe('AbstractList', () => {
  let target: AbstractList

  beforeEach(() => {
    target = TestClass.create()
  })

  it('init', () => {
    expect(target.pageNo).toBe(1)
  })

  it('changeItemsPerPage', () => {
    expect(target.itemsPerPage).toBe(25)
    target.changeItemsPerPage(50)
    expect(target.itemsPerPage).toBe(50)
  })
})
