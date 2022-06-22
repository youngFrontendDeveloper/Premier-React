import "./Header.css";
import Time from "../Time/Time";
import Indicators from "../Indicators/Indicators";
import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";
import Phone from "../Phone/Phone";

function Header() {
  const isHeader = true;
  const phoneClass ="link phone__link"

  return (
    <header className="header">
      <div className="header__top">
        <div className="container center-sb">
          <Time/>
          <Indicators/>
        </div>
      </div>
      <div className="header__bottom">
        <div className="container header__grid">
          <Logo isHeader={isHeader}/>
          <p>
            <strong className="phone__text">Бесплатный звонок:</strong>
            <Phone phoneClass={phoneClass}/>
          </p>

          <Navigation/>
        </div>
      </div>
    </header>

  );
}

export default Header;