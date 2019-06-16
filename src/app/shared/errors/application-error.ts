export class ApplicationError extends Error {
  constructor(message: string) {
    super(message)

    // instanceofを使えるようにする
    Object.setPrototypeOf(this, ApplicationError.prototype)
  }
}
