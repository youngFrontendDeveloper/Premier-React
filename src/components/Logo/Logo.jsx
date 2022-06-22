import "./Logo.css";
import { ReactComponent as HeaderLogo } from "./img/logo.svg";
import {ReactComponent as FooterLogo} from "./img/logo-footer.svg"


function Logo({isHeader, logoClass}) {
  return (
    <>
      <a href="/" className={ isHeader ? "logo" : `logo logo--footer ${logoClass}`}>
        { isHeader ? <HeaderLogo/> : <FooterLogo />}
      </a>
    </>
  );
}

export default Logo;