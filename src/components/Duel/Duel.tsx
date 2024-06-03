"use client"
import Image from "next/image"
import React from "react"
import "./Duel.css"

type propsType = {
  nickname: string
  stake: string
  playrs: number
  map: string
  imgProfile: string
  onClickBtn: () => void
}

export const Duel: React.FC<propsType> = (props) => {
  return (
    <div className="duel">
      <div className="duel__profile">
        <div className="duel__img">
          <Image src={props.imgProfile} alt="#" width={60} height={60} />
        </div>
        <div className="duel__creator">
          <div className="duel__label">Создатель</div>
          <div className="duel__value">{props.nickname}</div>
        </div>
      </div>

      <div className="duel__info">
        <div className="duel__map">
          <Image src={props.map} alt="#" width={80} height={40} />
        </div>
        <div className="duel__stake">
          <div className="duel__label">Ставка</div>
          <div className="duel__value">{props.stake} DC</div>
        </div>
        <div className="duel__playrs">
          <div className="duel__label">Игроки</div>
          <div className="duel__value">{props.playrs}/2</div>
        </div>
        <div className="duel__btn">
          <button onClick={() => props.onClickBtn()}>Присоединиться</button>
        </div>
      </div>
    </div>
  )
}
