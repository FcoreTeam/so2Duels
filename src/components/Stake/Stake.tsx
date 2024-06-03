"use client"
import duels from "@/store/duels"
import { observer } from "mobx-react-lite"
import React from "react"
import "./Stake.css"

export const Stake = observer(() => {
  const { maxStake, minStake, setMaxStake, setMinStake } = duels
  console.log("render Stake")
  const onChangeMaxStake = (event: React.ChangeEvent<HTMLInputElement>) => {
    let newMaxStake = Number(event.target.value)
    if (newMaxStake <= minStake) {
      setMaxStake(minStake + 10)
      return
    }
    if (newMaxStake >= 1000000) {
      setMaxStake(1000000)
      return
    }
    setMaxStake(newMaxStake)
  }

  const onChangeMinStake = (event: React.ChangeEvent<HTMLInputElement>) => {
    let newMinStake = Number(event.target.value)
    if (newMinStake >= maxStake) {
      setMinStake(maxStake - 10)
      return
    }
    if (newMinStake <= 80) {
      setMinStake(80)
      return
    }
    setMinStake(newMinStake)
  }

  return (
    <div className="stake">
      <div className="stake__title">Ставка дуэли</div>
      <div className="stake__box">
        <label className="stake__min">
          От
          <div className="icon-coin">
            <input type="number" min={80} value={minStake} onChange={onChangeMinStake} />
          </div>
        </label>
        <label className="stake__max">
          До
          <div className="icon-coin">
            <input type="number" max={1000000} value={maxStake} onChange={onChangeMaxStake} />
          </div>
        </label>
      </div>
    </div>
  )
})
