import { UserDTO, UserResponseDTO } from '../api-clients'

const USERS: UserDTO[] = [
  {
    id: 1,
    email: 'a@a.com',
    lastName: '田中',
    firstName: '一郎'
  },
  {
    id: 2,
    email: 'c@c.com',
    lastName: '田中',
    firstName: '三郎'
  },
  {
    id: 3,
    email: 'b@b.com',
    lastName: '田中',
    firstName: '二郎'
  }
]

export const DUMMY_USERS: UserResponseDTO = {
  totalItems: 55,
  users: USERS
}
