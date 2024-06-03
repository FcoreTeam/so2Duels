import React, { useState } from "react"
import "./CreateDuel.css"
import Image from "next/image"

type propsType = {
  setIsOpen: (value: boolean) => void
}

export const CreateDuel: React.FC<propsType> = ({ setIsOpen }) => {
  const [id, setID] = useState(1)
  return (
    <>
      <div className="create-duel">
        <div className="create-duel__title">
          Создание дуэля <span className="icon-plus" onClick={() => setIsOpen(false)}></span>
        </div>
        <div className="create-duel__body">
          <div className="create-duel__map">
            <div className="create-duel__subtitle">Карта:</div>
            <div className="create-duel__wrapper">
              <div
                className={`create-duel__box ${id === 1 ? "create-duel__active" : ""}`}
                onClick={() => setID(1)}
              >
                <div className="create-duel__img">
                  <Image src="/img/map/bridge.jpeg" alt="#" width={70} height={40} />
                </div>
                <div className="create-duel__label">Bridge</div>
              </div>
              <div
                className={`create-duel__box ${id === 2 ? "create-duel__active" : ""}`}
                onClick={() => setID(2)}
              >
                <div className="create-duel__img">
                  <Image src="/img/map/bridge.jpeg" alt="#" width={70} height={40} />
                </div>
                <div className="create-duel__label">Bridge</div>
              </div>
              <div
                className={`create-duel__box ${id === 3 ? "create-duel__active" : ""}`}
                onClick={() => setID(3)}
              >
                <div className="create-duel__img">
                  <Image src="/img/map/bridge.jpeg" alt="#" width={70} height={40} />
                </div>
                <div className="create-duel__label">Bridge</div>
              </div>
              <div
                className={`create-duel__box ${id === 4 ? "create-duel__active" : ""}`}
                onClick={() => setID(4)}
              >
                <div className="create-duel__img">
                  <Image src="/img/map/bridge.jpeg" alt="#" width={70} height={40} />
                </div>
                <div className="create-duel__label">Bridge</div>
              </div>
            </div>
          </div>
          <div className="create-duel__stake">
            <span>Ставка: </span>
            <input type="number" />
          </div>
          <div className="create-duel__btns">
            <button className="create-duel__clear" onClick={() => setIsOpen(false)}>
              Отменить
            </button>
            <button className="create-duel__create" onClick={() => setIsOpen(false)}>
              Создать
            </button>
          </div>
        </div>
      </div>
      <div className="create-duel__overlay"></div>
    </>
  )
}
