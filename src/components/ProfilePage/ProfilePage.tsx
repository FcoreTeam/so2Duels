"use client"
import Image from "next/image"
import React from "react"
import { Cell, Pie, PieChart } from "recharts"

export const ProfilePage = () => {
  const data = [
    { name: "lose", value: 50 },
    { name: "win", value: 50 },
  ]
  const COLORS = ["rgb(0, 255, 71)", "rgb(239, 34, 34)"]
  return (
    <>
      <div className="profile__wrapper">
        <div className="profile-about">
          <div className="profile-about__img">
            <Image src={"/img/profile/profile__def.jpg"} alt="#" width={130} height={130} />
          </div>
          <div className="profile-about__info">
            <div className="profile-about__nick">S0dus</div>
            <div className="profile-about__fullname">Дмитрий Гмырин</div>
            <div className="profile-about__security">
              <div className="profile-about__box">
                <div className="profile-about__label">Баланс</div>
                <div className="profile-about__value">
                  3465 <span className="profile-yellow">G</span>+
                </div>
              </div>
              <div className="profile-about__box">
                <div className="profile-about__label">Игровой ID</div>
                <div className="profile-about__value">35880749</div>
              </div>
              <button className="profile-about__button">Вывести баланс</button>
            </div>
          </div>
        </div>
        <div className="profile-present">
          <div className="profile-present__box">
            <div className="profile-present__title">Получайте бонус каждые 24ч!</div>
            <div className="profile-present__btn">Получить</div>
          </div>

          <Image
            src={"/img/case24.png"}
            alt="#"
            width={300}
            height={300}
            className="profile-present__img profile-present__case24"
          />
          <Image
            src={"/img/red.png"}
            alt="#"
            width={300}
            height={300}
            className="profile-present__img profile-present__red"
          />
          <Image
            src={"/img/blue.png"}
            alt="#"
            width={300}
            height={300}
            className="profile-present__img profile-present__blue"
          />
        </div>
      </div>
      <div className="profile__wrapper">
        <div className="duels__box">
          <div className="duels__title">Процент побед</div>
          <div className="duels__list">
            <div className="profile-winrate">
              <div className="profile-winrate__char">
                <div className="profile-winrate__pr">50%</div>
                <PieChart width={243} height={243} style={{ transform: "rotate(90deg)" }}>
                  <Pie data={data} innerRadius={80} outerRadius={100} dataKey="value" stroke="#ffffff00">
                    {data.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                </PieChart>
              </div>
              <div className="profile-winrate__info">
                <div className="profile-winrate__desc">
                  График соотношений побед и пройгрышей, чтобы его повысить, чаще побеждайте соперников.
                </div>
                <div className="profile-winrate__wrapper">
                  <div className="profile-winrate__box">
                    <div className="profile-winrate__label">Побед</div>
                    <div className="profile-winrate__value profile--green">400</div>
                  </div>
                  <div className="profile-winrate__box">
                    <div className="profile-winrate__label">Поражений</div>
                    <div className="profile-winrate__value profile--red">400</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="duels__box">
          <div className="duels__title">История матчей</div>
          <div className="duels__list">
            <div className="profile-duel">
              <div className="profile-duel__map">
                <div className="profile-duel__img">
                  <Image src={"/img/map/bridge.jpeg"} alt="#" width={70} height={40} />
                </div>
                <div className="profile-duel__box">
                  <div className="profile-duel__label">Карта</div>
                  <div className="profile-duel__value">Sandstone</div>
                </div>
              </div>
              <div className="profile-duel__box">
                <div className="profile-duel__label">Ставка</div>
                <div className="profile-duel__value">
                  1000<span className="profile-yellow">G</span>
                </div>
              </div>
              <div className="profile-duel__box">
                <div className="profile-duel__label">Результат</div>
                <div className="profile-duel__value profile--green">Победа</div>
              </div>
              <div className="profile-duel__box">
                <div className="profile-duel__label">Завершен</div>
                <div className="profile-duel__value">04.08.2023 17:10МСК</div>
              </div>
            </div>
            <div className="profile-duel">
              <div className="profile-duel__map">
                <div className="profile-duel__img">
                  <Image src={"/img/map/bridge.jpeg"} alt="#" width={70} height={40} />
                </div>
                <div className="profile-duel__box">
                  <div className="profile-duel__label">Карта</div>
                  <div className="profile-duel__value">Sandstone</div>
                </div>
              </div>
              <div className="profile-duel__box">
                <div className="profile-duel__label">Ставка</div>
                <div className="profile-duel__value">
                  1000<span className="profile-yellow">G</span>
                </div>
              </div>
              <div className="profile-duel__box">
                <div className="profile-duel__label">Результат</div>
                <div className="profile-duel__value profile--green">Победа</div>
              </div>
              <div className="profile-duel__box">
                <div className="profile-duel__label">Завершен</div>
                <div className="profile-duel__value">04.08.2023 17:10МСК</div>
              </div>
            </div>
            <div className="profile-duel">
              <div className="profile-duel__map">
                <div className="profile-duel__img">
                  <Image src={"/img/map/bridge.jpeg"} alt="#" width={70} height={40} />
                </div>
                <div className="profile-duel__box">
                  <div className="profile-duel__label">Карта</div>
                  <div className="profile-duel__value">Sandstone</div>
                </div>
              </div>
              <div className="profile-duel__box">
                <div className="profile-duel__label">Ставка</div>
                <div className="profile-duel__value">
                  1000<span className="profile-yellow">G</span>
                </div>
              </div>
              <div className="profile-duel__box">
                <div className="profile-duel__label">Результат</div>
                <div className="profile-duel__value profile--green">Победа</div>
              </div>
              <div className="profile-duel__box">
                <div className="profile-duel__label">Завершен</div>
                <div className="profile-duel__value">04.08.2023 17:10МСК</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
