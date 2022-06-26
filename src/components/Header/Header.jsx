import "./Header.css";
import Time from "../Time/Time";
import Indicators from "../Indicators/Indicators";
import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";
import Phone from "../Phone/Phone";

function Header() {
  const isHeader = true;
  const phoneClass ="phone"

  return (
    <header className="header" id="home">
      <div className="header__top">
        <div className="container center-sb">
          <Time/>
          <Indicators/>
        </div>
      </div>
      <div className="header__bottom">
        <div className="container header__grid">
          <Logo isHeader={isHeader}/>
          <div className="header__phone">
            <strong className="header__phone-text">Бесплатный звонок:</strong>
            <Phone phoneClass={phoneClass}/>
          </div>

          <Navigation/>
        </div>
      </div>
    </header>

  );
}

export default Header;