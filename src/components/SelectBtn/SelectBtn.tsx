"use client"
import React, { useState } from "react"
import "./SelectBtn.css"

type itemSelect = { title: string; id: string }

type propsType = {
  currentItem: itemSelect
  items: Array<itemSelect>
  setCurrentItem: (currentFilter: any) => void
}

export const SelectBtn: React.FC<propsType> = (props) => {
  const [open, setOpen] = useState(false)
  return (
    <div className="select">
      <button
        className={`select__btn ${open && "select__btn--open"}`}
        onClick={() => setOpen((prev) => !prev)}
      >
        <span className="icon-expand"></span> {props.currentItem.title}
      </button>
      {open && (
        <>
          <div className="select__body">
            {props.items.map((i: itemSelect) => {
              return (
                <button
                  className="select__item"
                  key={i.id}
                  onClick={() => {
                    props.setCurrentItem(i)
                    setOpen(false)
                  }}
                >
                  {i.title}
                </button>
              )
            })}
          </div>
          <div className="select__overlay" onClick={() => setOpen(false)}></div>
        </>
      )}
    </div>
  )
}
