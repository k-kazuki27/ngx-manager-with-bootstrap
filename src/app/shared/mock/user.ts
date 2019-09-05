import { UserDTO, UserResultDTO } from '../api-clients'

const USERS: UserDTO[] = [
  {
    id: 1,
    userId: 'z0001',
    email: 'a@a.com',
    lastName: '田中',
    firstName: '一郎',
    birthday: '2011-04-07'
  },
  {
    id: 2,
    userId: 'z0002',
    email: 'c@c.com',
    lastName: '田中',
    firstName: '三郎'
  },
  {
    id: 3,
    userId: 'z0003',
    email: 'b@b.com',
    lastName: '田中',
    firstName: '二郎'
  }
]

export const DUMMY_USERS: UserResultDTO = {
  totalItems: 55,
  users: USERS
}

export const DUMMY_USER: UserDTO = USERS[0]
