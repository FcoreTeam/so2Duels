"use client"
import { DuelPage } from "@/components/DuelPage/DuelPage"
import { HeaderDuel } from "@/components/HeaderDuel/HeaderDuel"
import { SubHeaderDuel } from "@/components/SubHeaderDuel/SubHeaderDuel"
import React, { useEffect, useState } from "react"

const DuelsID = ({ params }: { params: { id: string } }) => {
  return (
    <section className="duel-info">
      <div className="container">
        <DuelPage />
      </div>
    </section>
  )
}

export default DuelsID
