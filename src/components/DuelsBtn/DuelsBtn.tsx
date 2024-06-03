"use client"
import React, { useState } from "react"
import { Stake } from "../Stake/Stake"
import { SelectBtn } from "../SelectBtn/SelectBtn"
import "./DuelsBtn.css"
import Duels from "@/store/duels"
import { observer } from "mobx-react-lite"
import { CreateDuel } from "./CreateDuel/CreateDuel"

export const DuelsBtn = observer(() => {
  const { filters, currentFilter, setCurrentFilter, setDefoult } = Duels
  const [isOpen, setIsOpen] = useState(false)
  console.log("render DuelsBtn")
  return (
    <>
      <button className="duels__button duels__button--blue" onClick={() => setIsOpen(true)}>
        <span className="icon-plus"></span> Создать комнату
      </button>
      <Stake />
      <SelectBtn items={filters} setCurrentItem={setCurrentFilter} currentItem={currentFilter} />
      <button className="duels__button duels__button--dark" onClick={setDefoult}>
        По умолчанию
      </button>
      {isOpen && <CreateDuel setIsOpen={setIsOpen} />}
    </>
  )
})
