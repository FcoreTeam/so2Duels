"use client"
import { TextField } from "@/components/TextField/TextField"
import React, { useRef, useState } from "react"

const Question = () => {
  const [topic, setTopic] = useState("")
  const [details, setDetails] = useState("")
  const [email, setEmail] = useState("")

  const file = useRef<HTMLInputElement | null>(null)
  const allowedMimeTypes = [
    "video/mpeg",
    "video/mp4",
    "video/x-msvideo",
    "video/x-ms-wmv",
    "video/vnd.dlna.mpeg-tts",
    "video/quicktime",
    "video/x-flv",
    "video/3gpp",
    "video/webm",
    "video/x-dnxhr",
    "video/x-prores",
    "video/x-cineform",
    "video/hevc",
  ]

  const handleFileUpload = () => {
    if (file.current) {
      const currentFileList = file.current.files
      if (currentFileList) {
        const currentFile = currentFileList[0]
        if (allowedMimeTypes.includes(currentFile.type)) {
          console.log(`Отправка сайта ${currentFile.name}`)
          return
        }
        alert("Файл не правильного формата!")
      }
      return
    }
  }

  const sendQuestion = () => {
    alert("sendQuestion")
  }

  return (
    <section className="add">
      <div className="container">
        <TextField
          title="Тема вопроса"
          pleceholderText="Напишите тему вопроса..."
          value={topic}
          setValue={(value: string) => setTopic(value)}
          type="small"
          maxValue={100}
        />
        <div className="add__box">
          <TextField
            title="Подробности"
            pleceholderText="Подробности..."
            value={details}
            setValue={(value: string) => setDetails(value)}
            type="large"
            maxValue={1000}
          />
          <label htmlFor="fileSup" className="add__file-label">
            <span className="icon-link"></span>
            Прикрепить файл
            <input type="file" id="fileSup" ref={file} className="add__file" />
          </label>
        </div>
        <div className="add__send">
          <div className="add__input">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.currentTarget.value)}
              className="add__email"
              placeholder="Введите свою почту, чтобы мы через нее смогли с Вами связаться"
              maxLength={100}
            />
          </div>
          <button className="add__button" onClick={() => sendQuestion()}>
            Отправить
          </button>
        </div>
      </div>
    </section>
  )
}

export default Question
