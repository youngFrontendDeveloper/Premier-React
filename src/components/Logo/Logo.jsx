import "./Logo.css";
import { ReactComponent as CompanyLogo } from "../../img/logo.svg";
import { NavLink } from "react-router-dom";

function Logo() {
  return (
    <>
      <NavLink to="/" className="logo">
        <CompanyLogo/>
      </NavLink>
    </>
  );
}

export default Logo;