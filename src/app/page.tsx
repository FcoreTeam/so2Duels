import { Present } from "@/components/Present/Present"
import Image from "next/image"

const Main = () => {
  return (
    <>
      <section className="promo">
        <div className="container">
          <h1 className="promo__title">STANDOFF DUELS</h1>
          <div className="promo__desc">Уважаемые игроки! Открылся проект по дуэялям в Standoff 2</div>
          <button className="promo__btn">Начать играть!</button>
        </div>
      </section>
      <section className="instructions">
        <div className="container">
          <h2 className="label">Как играть дуэли?</h2>
          <div className="instructions__wrapper">
            <div className="instruction">
              <div className="instruction__title">
                <div className="instruction__label instruction__label-blue">1</div>Пополните баланс
              </div>
              <div className="instruction__desc">
                Дуэли - игра на золото. Чтобы играть с другими игроками, вам нужно иметь баланс. На нашем
                сайте есть любые способы оплаты, и все работает а автоматическом режиме, пополняй баланс и
                выйгрывай!
              </div>
              <div className="instruction__imgs">
                <Image
                  src={"/img/instructions/wallet.png"}
                  alt="#"
                  className="instruction__img"
                  width={322}
                  height={322}
                />
                <Image
                  src={"/img/instructions/light-blue.svg"}
                  alt="#"
                  className="instruction__img-light"
                  width={730}
                  height={730}
                />
              </div>
            </div>
            <div className="instruction">
              <div className="instruction__title">
                <div className="instruction__label instruction__label-yellow">2</div>Начать игру
              </div>
              <div className="instruction__desc">
                Далее нужно найти соперников. Для этого перейдите во вкладку Дуэли, там будет список доступных
                игр, если не будет, попробуйте создать игру сами, и к вам обезательно присоеденятся!
              </div>
              <div className="instruction__imgs">
                <Image
                  src={"/img/instructions/goblet.png"}
                  alt="#"
                  className="instruction__img"
                  width={322}
                  height={322}
                />
                <Image
                  src={"/img/instructions/light-yellow.svg"}
                  alt="#"
                  className="instruction__img-light"
                  width={730}
                  height={730}
                />
              </div>
            </div>
            <div className="instruction">
              <div className="instruction__title">
                <div className="instruction__label instruction__label-green">3</div>Вывод средств
              </div>
              <div className="instruction__desc">
                Если вам удалось выйграть других игроков и заработать голду, то необходимо ее вывеси, Вкладка
                “вывод” находится где и пополнения. К слову, можно выводить не только золото, но и рубли!
              </div>
              <div className="instruction__imgs">
                <Image
                  src={"/img/instructions/return.png"}
                  alt="#"
                  className="instruction__img"
                  width={322}
                  height={322}
                />
                <Image
                  src={"/img/instructions/light-green.svg"}
                  alt="#"
                  className="instruction__img-light"
                  width={730}
                  height={730}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="presents">
        <div className="container">
          <h2 className="label">Бонусы</h2>
          <div className="presents__wrapper">
            <Present urlImg="/img/present/tg.png" title="Телеграмм" isDone={false} linkBtn="#" btnType="tg">
              Подпишитесь на наш телеграмм и получите бонус на баланс.
            </Present>
            <Present urlImg="/img/present/vk.png" title="Вконтакте" isDone={false} linkBtn="#" btnType="vk">
              Подпишитесь на наш телеграмм и получите бонус на баланс.
            </Present>
            <Present
              urlImg="/img/present/youTube.png"
              title="Ютуб"
              isDone={false}
              linkBtn="#"
              btnType="youtube"
            >
              Подпишитесь на наш телеграмм и получите бонус на баланс.
            </Present>
          </div>
        </div>
      </section>
    </>
  )
}

export default Main
