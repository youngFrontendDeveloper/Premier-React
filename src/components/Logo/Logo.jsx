import "./Logo.css";
import { Link } from "react-scroll";
import { ReactComponent as HeaderLogo } from "./img/logo.svg";
import { ReactComponent as FooterLogo } from "./img/logo-footer.svg";

function Logo({ isHeader, logoClass }) {

  return (
    <>
      <Link to="home"
            duration={ 500 }
            spy={ true }
            smooth={ true }
            className={ isHeader ? "logo" : `logo logo--footer ${ logoClass }` }>
        { isHeader ? <HeaderLogo/> : <FooterLogo/> }
      </Link>
    </>
  );
}

export default Logo;