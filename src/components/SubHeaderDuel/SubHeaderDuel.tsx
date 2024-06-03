import React from "react"
import "./SubHeaderDuel.css"
import Image from "next/image"
import currentDuel from "@/store/currentDuel"

export const SubHeaderDuel = () => {
  const { status } = currentDuel
  const message =
    status === "started"
      ? "C этого момента все максимально серьёозно. Рекомендуем начать записать видео, чтобы в случае обмана со стороны вашего оппонента у вас были доказательства своей невиновности."
      : "У вас имееться 2 минуты чтобы присоединиться в лобби опонента. Следуйте указанием ниже!"
  return (
    <div className="subheader-duel">
      <div className="subheader-duel__warning">
        <div className="subheader-duel__warning-img">
          <Image src={"/img/warning.png"} alt="#" width={98} height={83} />
        </div>
        <div className="subheader-duel__warning-img-message">{message}</div>
      </div>
      <div className="subheader-duel__timer">30:00 мин.</div>
      <div className="subheader-duel__map">
        <div className="subheader-duel__map-info">
          <div className="subheader-duel__map-label">Карта</div>
          <div className="subheader-duel__map-title">Bridge</div>
        </div>
        <div className="subheader-duel__map-img">
          <Image src="/img/map/bridge.jpeg" alt="#" width={144} height={81} />
        </div>
      </div>
    </div>
  )
}
