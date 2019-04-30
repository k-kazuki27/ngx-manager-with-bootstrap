export * from './login.service'
import { LoginService } from './login.service'
export * from './user.service'
import { UserService } from './user.service'
export const APIS = [LoginService, UserService]
