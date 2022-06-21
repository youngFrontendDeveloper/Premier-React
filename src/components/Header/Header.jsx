import "./Header.css";
import Time from "../Time/Time";
import Indicators from "../Indicators/Indicators";
import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";
import Phone from "../Phone/Phone";

function Header() {
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
          <Logo/>
          <Phone/>
          <Navigation/>
        </div>
      </div>
    </header>

  );
}

export default Header;