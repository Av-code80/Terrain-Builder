export default class NetworkError extends Error {
  public status: number
  public cause: string


  constructor(
    message: string,
    cause: string,
    status: number,  
  ) {
    super(message)
    Object.setPrototypeOf(this, NetworkError.prototype)
    this.status = status
    this.cause = cause
  }
}
