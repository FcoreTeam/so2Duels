import React, { useRef, useState } from "react"
import "./Dispute.css"

export const Dispute = () => {
  const [value, setValue] = useState("")

  const handleChange = (event: any) => {
    setValue(event.target.value)
    event.target.style.height = "40px"
    event.target.style.height = `${event.target.scrollHeight}px`
  }

  return (
    <div className="dispute">
      <div className="dispute__header">Чат споров</div>
      <div className="dispute__body"></div>
      <div className="dispute__inputs">
        <textarea
          className="dispute__input"
          placeholder="Написать сообщение..."
          value={value}
          onChange={handleChange}
        />
        <label htmlFor="dispute__file" className="dispute__file">
          <span className="icon-add-file"></span>
          <input type="file" id="dispute__file" className="dispute__input--file" />
        </label>
        <button className="dispute__button">
          <span className="icon-send"></span>
        </button>
      </div>
    </div>
  )
}
