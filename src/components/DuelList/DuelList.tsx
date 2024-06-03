"use client"
import React, { useEffect } from "react"
import { Duel } from "../Duel/Duel"
import duels from "@/store/duels"
import { observable } from "mobx"

export const DuelList = () => {
  const { getDuels } = duels
  useEffect(() => {
    getDuels()
  })
  return (
    <div className="duels__list">
      <Duel
        nickname="Sodus"
        stake="1000"
        playrs={1}
        map="/img/map1.jpeg"
        imgProfile="/img/profile/profile__def.jpg"
        onClickBtn={() => console.log("click")}
      />
    </div>
  )
}
