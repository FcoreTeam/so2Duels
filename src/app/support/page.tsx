import { Foldable } from "@/components/Foldable/Foldable"

const Support = () => {
  return (
    <section className="support">
      <div className="container">
        <div className="support__head">
          <div className="support__box">
            <div className="support__title">F.A.Q</div>
            <div className="support__desc">
              Здесь содержаться всевозможные ответы на ваши вопросы.
              <br /> Если вы не нашли ответа на вопрос, нажмите на кнопку “Задать свой вопрос”
            </div>
          </div>
          <button className="support__btn">
            <span className="icon-search"></span> Задать свой вопрос
          </button>
        </div>
        <Foldable header="Я не нашел ответа на свой вопрос, у меня есть предложение или я заметил ошибку. Что делать?">
          Для вывода золота необходимо перейти в свой личный кабинет. Далее нужно нажать на “купить золото.”
          Золото покупается за деньги, находящиеся у вас на балансе сайта. После того, как вы купили золото,
          вы можете его вывести. Для этого нажмите на “вывести золото” и следуйте инструкциям.
        </Foldable>
        <Foldable header="Кто берет комиссию внутриигровго рынка при вывод золота?">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem corrupti at, labore nemo cupiditate
          omnis ipsa incidunt, tenetur est, error cumque nostrum dolorum sunt voluptatem nulla ipsum sed
          praesentium veritatis.
        </Foldable>
        <Foldable header="Почему для вывода используется только SM1014 “Wave”? Что делать, если у меня его нет?">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam quos nesciunt cupiditate id
          consectetur quod, incidunt provident, atque, suscipit dolorem voluptatem? Temporibus earum eum quis
          dolor ullam eaque, cumque corporis!
        </Foldable>
      </div>
    </section>
  )
}

export default Support
