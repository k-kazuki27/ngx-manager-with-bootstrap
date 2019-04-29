import { Injectable } from '@angular/core'
import { Observable, of } from 'rxjs'

import { User } from './../models/user'

const USERS: User[] = [
  {
    id: 1,
    userId: 'a',
    email: 'a@a.com',
    lastName: '田中',
    firstName: '一郎'
  },
  {
    id: 2,
    userId: 'c',
    email: 'c@c.com',
    lastName: '田中',
    firstName: '三郎'
  },
  {
    id: 3,
    userId: 'b',
    email: 'b@b.com',
    lastName: '田中',
    firstName: '二郎'
  }
]

@Injectable({
  providedIn: 'root'
})
export class UserApiService {
  constructor() {}

  findUsers(): Observable<User[]> {
    // tslint:disable-next-line: deprecation
    return of(USERS)
  }
}
