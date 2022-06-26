import "./Footer.css";
import Logo from "../Logo/Logo";
import Phone from "../Phone/Phone";
import Button from "../Button/Button";
import { Link, animateScroll as scroll } from "react-scroll";

function Footer({ handleOpenModal }) {
  const isHeader = false;
  const phoneClass = "phone--white";
  const buttonText = "Отправить заявку";
  const buttonClass = "footer__button-block";
  const buttonClick = handleOpenModal;
  const logoClass = "footer__logo";

  return (
    <footer>
      <div className="footer__top">
        <div className="container footer__top-wrap">
          <Logo isHeader={ isHeader } logoClass={ logoClass }/>
          <nav className="footer__nav">
            <h4 className="footer__title">Навигация</h4>
            <ul className="footer__menu">
              <li className="footer__menu-item">
                <Link to="about"
                      spy={ true }
                      smooth={ true }
                      offset={ -70 }
                      duration={ 500 }
                      className="footer__menu-link">О нас</Link>
              </li>
              <li className="footer__menu-item">
                <Link to="our-works"
                      spy={ true }
                      smooth={ true }
                      offset={ -70 }
                      duration={ 500 }
                      className="footer__menu-link">Наши работы</Link>
              </li>
              <li className="footer__menu-item">
                <Link to="stages-work"
                      spy={ true }
                      smooth={ true }
                      offset={ -70 }
                      duration={ 500 }
                      className="footer__menu-link">Этапы работы</Link>
              </li>
              <li className="footer__menu-item">
                <Link to="reviews"
                      spy={ true }
                      smooth={ true }
                      offset={ -70 }
                      duration={ 500 }
                      className="footer__menu-link">Отзывы</Link>
              </li>
              <li className="footer__menu-item">
                <Link to="contacts"
                      spy={ true }
                      smooth={ true }
                      offset={ -70 }
                      duration={ 500 }
                      className="footer__menu-link">Контакты</Link>
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