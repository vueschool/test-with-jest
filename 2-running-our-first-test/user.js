export default class User {
  constructor(details) {
    const { firstname, lastname } = details
    this.firstname = firstname
    this.lastname = lastname
  }
  get name() {
    return `${this.firstname} ${this.lastname}`
  }
}
