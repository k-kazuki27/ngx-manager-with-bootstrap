import { ApplicationError } from './application-error'

describe('ApplicationError', () => {
  it('should create an instance', () => {
    expect(new ApplicationError('error')).toBeTruthy()
  })
})
