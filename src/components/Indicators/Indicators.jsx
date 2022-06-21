import "./Indicators.css";
import { ReactComponent as Sign } from "../../img/mobile-signal.svg";
import { ReactComponent as Wifi } from "../../img/wifi.svg";
import { ReactComponent as Buttery } from "../../img/buttery.svg";

function Indicators() {
  return (
    <div className="header__indicators">
      <Sign/>
      <Wifi/>
      <Buttery/>
    </div>
  );
}

export default Indicators;