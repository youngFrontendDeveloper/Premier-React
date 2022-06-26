import "./Menu.css";
import { useEffect, useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";

function Menu({ isMenuOpen, toggleMenuMode }) {
  const [ windowDimenion, setWindowDimenio ] = useState( {
    winWidth: window.innerWidth,
    winHeight: window.innerHeight,
  } );
  const [ isMobile, setMobile ] = useState( true );
  const mobileMenuClass = isMobile ? isMenuOpen ? "menu nav__menu " : "menu nav__menu visually-hidden" : "menu nav__menu";

  // Определяем размер окна браузера

  const detectSize = () => {
    setWindowDimenio( {
      winWidth: window.innerWidth,
      winHeight: window.innerHeight
    } );
  };

  useEffect( () => {
    window.addEventListener( "resize", detectSize );
    if( windowDimenion.winWidth >= 1200 ) {
      setMobile( false );
    }
  }, [] );

  return (
    <ul className={ mobileMenuClass }>
      <li className="menu__item" onClick={ toggleMenuMode }>
        <Link to="home"
              activeClass="menu__link--active"
              spy={ true }
              smooth={ true }
              offset={ -70 }
              duration={ 500 }
              className="menu__link">О нас</Link>
      </li>
      <li className="menu__item" onClick={ toggleMenuMode }>
        <Link to="our-works"
              activeClass="menu__link--active"
              spy={ true }
              smooth={ true }
              offset={ -70 }
              duration={ 500 }
              className="menu__link">Наши работы</Link>
      </li>
      <li className="menu__item" onClick={ toggleMenuMode }>
        <Link to="stages-work"
              activeClass="menu__link--active"
              spy={ true }
              smooth={ true }
              offset={ -70 }
              duration={ 500 }
              className="menu__link">Этапы работы</Link>
      </li>
      <li className="menu__item" onClick={ toggleMenuMode }>
        <Link to="products"
              activeClass="menu__link--active"
              spy={ true }
              smooth={ true }
              offset={ -70 }
              duration={ 500 }
              className="menu__link">Продукция</Link>
      </li>
      <li className="menu__item" onClick={ toggleMenuMode }>
        <Link to="reviews"
              activeClass="menu__link--active"
              spy={ true }
              smooth={ true }
              offset={ -70 }
              duration={ 500 }
              className="menu__link">Отзывы</Link>
      </li>
      <li className="menu__item" onClick={ toggleMenuMode }>
        <Link to="contacts"
              activeClass="menu__link--active"
              spy={ true }
              smooth={ true }
              offset={ -70 }
              duration={ 500 }
              className="menu__link">Контакты</Link>
      </li>

    </ul>
  );
}

export default Menu;