import "./Footer.css"
import Image from "next/image"

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <Image src="/img/logo.png" alt="logo" width={241} height={50} />
          <div className="footer__info">
            <div className="footer__box">
              <div className="footer__img icon-users"></div>
              <div>
                <div className="footer__title">54346</div>
                <div className="footer__label">Пользователей</div>
              </div>
            </div>
            <div className="footer__box">
              <div className="footer__img icon-swords"></div>
              <div>
                <div className="footer__title">75427</div>
                <div className="footer__label">Сыграных дуэлей</div>
              </div>
            </div>
          </div>
          <div className="footer__socialnetwork">
            <a href="#" className="footer__link icon-telegram" target="_blank"></a>
            <a href="#" className="footer__link icon-discord" target="_blank"></a>
            <a href="#" className="footer__link icon-vk" target="_blank"></a>
          </div>
        </div>
      </div>
    </footer>
  )
}
