import React from "react"
import "./MainDuel.css"

type propsType = {
  status: string
}

export const MainDuel: React.FC<propsType> = (props) => {
  const copyLink = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text)
      console.log("Текст успешно скопирован в буфер обмена!")
    } catch (err) {
      console.error("Ошибка:", err)
    }
  }
  return (
    <div className="main-duel">
      <div className="main-duel__body">
        <span className="main-duel__bold">fayzenov</span> сейчас необходимо присоединиться в лобби к
        <span className="main-duel__bold"> SHIPLOV</span>. Для этого нажмите на синюю кнопку
        <span className="main-duel__blue"> «Перейти»</span>. Вас автоматически перебросит в игру. После этого
        нажмите на
        <span className="main-duel__green"> «Готово»</span>. Перед тем, как нажать на
        <span className="main-duel__green"> «Готово»</span>, вы обязательно должны быть в лобби! Кнопка
        <span className="main-duel__red"> «Отмена»</span> завершает дуэль. Её можно использовать не более 3х
        раз в течение 24 часов. Иначе ваш аккаунт на нашем сервисе будет заблокирован на сутки!
      </div>
      <div className="main-duel__footer">
        <div className="main-duel__lobby">
          <div className="main-duel__lobby-link">
            Ссылка на лобби:{" "}
            <a href={"#"}>
              https:/linkstandolf2.com/wfobbwfoin/85003d8
              1863fad068000c04c2?token=LkBiwUfsN26pN13TYEqhCUMiu0ArUH
            </a>
          </div>
          <button className="main-duel__btn main-duel__btn--icon" onClick={() => copyLink("TExt link")}>
            <span className="icon-copy"></span>
          </button>
        </div>
        <div className="main-duel__btns">
          <button className="main-duel__btn">В лобби</button>
          <button className="main-duel__button main-duel__button--btn-red">Отмена</button>
          <button className="main-duel__button main-duel__button--btn-green">Готово</button>
        </div>
      </div>
    </div>
  )
}
