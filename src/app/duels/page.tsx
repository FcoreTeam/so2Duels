import { DuelList } from "@/components/DuelList/DuelList"
import { DuelsBtn } from "@/components/DuelsBtn/DuelsBtn"

const Duels = () => {
  return (
    <section className="duels">
      <div className="container">
        <div className="duels__wrapper">
          <div className="duels__control">
            <DuelsBtn />
          </div>
          <div className="duels__box">
            <div className="duels__title">Дуэли</div>
            <DuelList />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Duels
