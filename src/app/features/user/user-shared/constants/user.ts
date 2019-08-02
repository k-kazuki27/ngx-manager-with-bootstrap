import { TableHeader } from 'src/app/shared'

export const USER_LIST_HEADER: TableHeader[] = [
  {
    isButton: true,
    isSort: false
  },
  {
    isButton: false,
    isSort: true,
    key: 'userId',
    name: 'ユーザID'
  },
  {
    isButton: false,
    isSort: true,
    key: 'email',
    name: 'メールアドレス'
  },
  {
    isButton: false,
    isSort: true,
    key: 'lastName',
    name: '名前（姓）'
  },
  {
    isButton: false,
    isSort: true,
    key: 'firstName',
    name: '名前（名）'
  },
  {
    isButton: true,
    isSort: false
  }
]
