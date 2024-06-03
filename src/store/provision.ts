import { makeAutoObservable } from "mobx"

class Provision {
  load: boolean = false
  authorize: boolean = false
  id: number = 1243
  token: string | null = null
  messageError: string = ""
  constructor() {
    makeAutoObservable(this)
  }

  setLoad(load: boolean) {
    this.load = load
  }
  setAuthorize(authorize: boolean) {
    this.authorize = authorize
  }
  setMessageError(messageError: string) {
    this.messageError = messageError
  }
}

export default new Provision()
