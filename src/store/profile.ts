import { makeAutoObservable } from "mobx"
import { duelI } from "../interfaces/duels"

class Profile {
  balance: number = 0
  firstName: string = ""
  lastName: string = ""
  nickName: string = ""
  victory: number = 0
  lesions: number = 0
  id: number = 0
  imgProfile: string = ""
  duels: Array<duelI> = []
  constructor() {
    makeAutoObservable(this, {}, { deep: true })
  }

  get ratioVictory() {
    return Math.round(this.victory / (this.victory + this.lesions))
  }
}

export default new Profile()
