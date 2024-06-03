"use client"
import React from "react"
import "./HeaderDuel.css"
import currentDuel from "@/store/currentDuel"
import Image from "next/image"
import { CopyToClipboard } from "react-copy-to-clipboard"

export const HeaderDuel = () => {
  const { profile1, profile2 } = currentDuel
  return (
    <div className="duel-info__header">
      <div className="duel-profile duel-profile-first">
        <div className="duel-profile__info">
          <div className="duel-profile__nickname">{profile1.nickname}</div>
          <div className="duel-profile__id">
            <CopyToClipboard text={profile1.id}>
              <div>
                {profile1.id} <span className="icon-copy"></span>
              </div>
            </CopyToClipboard>
          </div>
        </div>
        <div className="duel-profile__img">
          <Image src={"/img/profile/profile__def.jpg"} width={117} height={117} alt="#" />
        </div>
      </div>
      <Image src={"/img/vs.svg"} alt="#" width={304} height={217} className="img-vs" />
      <div className="duel-profile">
        <div className="duel-profile__img">
          <Image src={"/img/profile/profile__def.jpg"} width={117} height={117} alt="#" />
        </div>
        <div className="duel-profile__info">
          <div className="duel-profile__nickname">{profile2.nickname}</div>
          <div className="duel-profile__id">
            <CopyToClipboard text={profile2.id}>
              <div>
                {profile1.id} <span className="icon-copy"></span>
              </div>
            </CopyToClipboard>
          </div>
        </div>
      </div>
    </div>
  )
}
