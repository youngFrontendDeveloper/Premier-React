import "./Navigation.css";
import Menu from "../Menu/Menu";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import { useState } from "react";

function Navigation() {
  const [ isMenuOpen, toggleMenu ] = useState( false );

  const toggleMenuMode = () => {
    toggleMenu( !isMenuOpen );
  };


  return (
    <nav className="nav">
      <Menu isMenuOpen={ isMenuOpen } toggleMenuMode={ toggleMenuMode }/>
      <BurgerMenu isMenuOpen={ isMenuOpen } toggleMenuMode={ toggleMenuMode }/>

    </nav>
  );
}

export default Navigation;