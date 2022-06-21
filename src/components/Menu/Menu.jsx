import "./Menu.css";
import { useEffect, useState } from "react";

function Menu({ isMenuOpen, toggleMenuMode }) {
  const [ windowDimenion, setWindowDimenio ] = useState( {
    winWidth: window.innerWidth,
    winHeight: window.innerHeight,
  } );
  const [ isMobile, setMobile ] = useState( true );
  const mobileMenuClass =  isMobile  ? isMenuOpen  ? "menu nav__menu " : "menu nav__menu visually-hidden" : "menu nav__menu" ;

  // Определяем размер окна браузера

  const detectSize = () => {
    setWindowDimenio( {
      winWidth: window.innerWidth,
      winHeight: window.innerHeight
    } );
  };

  useEffect(()=>{
    window.addEventListener("resize", detectSize);
    if(windowDimenion.winWidth >= 1200) {
      setMobile(false)
    }
  },[])

  return (
    <ul className={ mobileMenuClass }>
      <li className="menu__item" onClick={ toggleMenuMode }>
        <a href="/" className="link menu__link menu__link--active">О нас</a>
      </li>
      <li className="menu__item" onClick={ toggleMenuMode }>
        <a href="#our-works" className="link menu__link">Наши работы</a>
      </li>
      <li className="menu__item" onClick={ toggleMenuMode }>
        <a href="#stages-work" className="link menu__link">Этапы работы</a>
      </li>
      <li className="menu__item" onClick={ toggleMenuMode }>
        <a href="#products" className="link menu__link">Продукция</a>
      </li>
      <li className="menu__item" onClick={ toggleMenuMode }>
        <a href="#reviews" className="link menu__link">Отзывы</a>
      </li>
      <li className="menu__item" onClick={ toggleMenuMode }>
        <a href="#contacts" className="link menu__link">Контакты</a>
      </li>

    </ul>
  );
}

export default Menu;