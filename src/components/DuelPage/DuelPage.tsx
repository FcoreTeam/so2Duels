import React, { useEffect } from "react"
import { HeaderDuel } from "../HeaderDuel/HeaderDuel"
import { SubHeaderDuel } from "../SubHeaderDuel/SubHeaderDuel"
import currentDuel from "@/store/currentDuel"
import provision from "@/store/provision"
import { MainDuel } from "../MainDuel/MainDuel"
import { Dispute } from "../Dispute/Dispute"

export const DuelPage = () => {
  const { status, profile1, profile2 } = currentDuel
  const { authorize, id } = provision

  if (authorize) {
    return <div>Чтобы получить доступ к дуэлю нужно авторизироваться!</div>
  }

  if (id !== profile1.id && id !== profile2.id) {
    return <div>Вы не являетесь участником дуэля!</div>
  }

  if (status === "completed") {
    return <div>Дуэль завершена!</div>
  }

  if (status === "canceled") {
    return <div>Дуэль отменена!</div>
  }

  if (status === "open") {
    return <div>Второй игрок еще не найден!</div>
  }
  // const test = async () => {
  //   const x = await getDuels(2)
  //   console.log(x)
  // }
  useEffect(() => {
    // test()
  })
  return (
    <>
      <HeaderDuel />
      <SubHeaderDuel />
      <MainDuel status={status} />
      <Dispute />
    </>
  )
}
