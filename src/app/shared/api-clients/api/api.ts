export * from './login-api';
import { LoginApi } from './login-api';
export * from './user-api';
import { UserApi } from './user-api';
export const APIS = [LoginApi, UserApi];
