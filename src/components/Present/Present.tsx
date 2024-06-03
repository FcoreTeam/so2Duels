"use client"

import React, { useEffect, useState } from "react"

import "./Present.css"

type propsType = {
  urlImg: string
  title: string
  linkBtn: string
  isDone: boolean
  children: React.ReactNode
  btnType: "tg" | "vk" | "youtube"
}

export const Present: React.FC<propsType> = (props) => {
  return (
    <div className="present" style={{ background: `no-repeat center/100% 100% url(${props.urlImg})` }}>
      <div className="present__title">{props.title}</div>
      <div className="present__desc">{props.children}</div>
      <div className={`${props.btnType} present__btns`}>
        <button className="present__button">ПЕРЕЙТИ</button>
        <button className="present__reverse icon-reverse"></button>
      </div>
    </div>
  )
}
