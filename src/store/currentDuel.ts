import { makeAutoObservable } from "mobx"

class CurrentDuel {
  profile1: any = {
    id: 1243,
    nickname: "Test1",
    imgProfile: "/img/profile/profile__def.jpg",
  }
  profile2: any = {
    id: 134565454,
    nickname: "Test2",
    imgProfile: "/img/profile/profile__def.jpg",
  }
  status: "open" | "completed" | "canceled" | "pending" | "started" | "contesting" = "pending"
  constructor() {
    makeAutoObservable(this)
  }
}

export default new CurrentDuel()
