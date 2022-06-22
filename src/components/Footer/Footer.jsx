import "./Footer.css";
import Logo from "../Logo/Logo";
import Phone from "../Phone/Phone";
import Button from "../Button/Button";

function Footer({ handleOpenModal }) {
  const isHeader = false;
  const phoneClass = "footer__contacts-phone";
  const buttonText = "Отправить заявку";
  const buttonClass = "footer__button-block";
  const buttonClick = handleOpenModal;
  const logoClass="footer__logo"

  return (
    <footer>
      <div className="footer__top">
        <div className="container footer__top-wrap">
          <Logo isHeader={ isHeader } logoClass={logoClass}/>
          <nav className="footer__nav">
            <h4 className="footer__title">Навигация</h4>
            <ul className="footer__menu">
              <li className="footer__menu-item">
                <a href="#about" className="link menu-link--white">О нас</a>
              </li>
              <li className="footer__menu-item">
                <a href="#our-works" className="link menu-link--white">Наши работы</a>
              </li>
              <li className="footer__menu-item">
                <a href="#stages-work" className="link menu-link--white">Этапы работы</a>
              </li>
              <li className="footer__menu-item">
                <a href="#reviews" className="link menu-link--white">Отзывы</a>
              </li>
              <li className="footer__menu-item">
                <a href="#contacts" className="link menu-link--white">Контакты</a>
              </li>
            </ul>
          </nav>

          <div className="footer__contacts">
            <h4 className="footer__title">Контакты</h4>
            <p className="footer__contacts-text">
              Телефон: <Phone phoneClass={ phoneClass }/> <br/>
              Адресс: <span className="footer__contacts-address">ул. Васенко, 13, Саранск</span>
            </p>
          </div>
          {/*end footer__contacts*/ }

          <div className="footer-connection">
            <h4 className="footer__title">Напишите нам</h4>
            <Button text={ buttonText } buttonClick={ buttonClick } buttonClass={ buttonClass }/>
          </div>
          {/*end footer-connection*/ }

        </div>
      </div>

      <div className="footer__bottom">
        <p className="footer__bottom-text">Все права защишены 2020 ©</p>
      </div>
    </footer>
  );
}

export default Footer;