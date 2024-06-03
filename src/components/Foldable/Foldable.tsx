"use client"
import { useState } from "react"
import "./Foldable.css"

type propsType = {
  header: string
  children: React.ReactNode
}

export const Foldable: React.FC<propsType> = (props) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="foldable">
      <div className="foldable__header" onClick={() => setIsOpen((prev) => !prev)}>
        <span className={`${isOpen && "foldable__icon-open"} icon-expand foldable__icon`}></span>
        {props.header}
      </div>
      <div className={`${isOpen ? "foldable__open" : "foldable__close"} foldable__body`}>
        {props.children}
      </div>
    </div>
  )
}
