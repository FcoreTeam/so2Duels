import React from "react"
import "./TextField.css"

type propsType = {
  title: string
  pleceholderText: string
  value: string
  setValue: (value: string) => void
  type: "small" | "large"
  maxValue: number
}

export const TextField: React.FC<propsType> = (props) => {
  const setValue = (value: string) => {
    if (props.value.length >= props.maxValue) {
      alert("Максимальное количество символов!")
      return
    }
    props.setValue(value)
  }
  return (
    <div className="textarea">
      <div className="textarea__header">{props.title}</div>
      <textarea
        name="text"
        id="text"
        className={`textarea__field textarea__field--${props.type}`}
        placeholder={props.pleceholderText}
        value={props.value}
        onChange={(e) => setValue(e.currentTarget.value)}
      ></textarea>
      <div className="textarea__len">
        {props.value.length}/{props.maxValue}
      </div>
    </div>
  )
}
