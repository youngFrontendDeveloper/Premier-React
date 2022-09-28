import "./Stages.css";
import { ReactComponent as Img1 } from "./img/dashed-top.svg";
import { ReactComponent as ImgDesk1 } from "./img/dashed-top-desktop.svg";
import { ReactComponent as Img2 } from "./img/dashed-bottom.svg";
import { ReactComponent as ImgDesk2 } from "./img/dashed-bottom-desktop.svg";
import { useMediaQuery } from "react-responsive";


function StagesItem({ num, stagesText }) {
  const isMobile = useMediaQuery( {
    query: "(max-width: 1200px)"
  } );

  return (
    <>
      <li className="stages__item">
        <span className="stages__item-number">{ num }</span>
        <span className="stages__item-text">
             {stagesText}
            </span>
        { isMobile ? (
          num == 1 ? (
            <Img1 className="stages__item-arr1" loading="lazy"/>

          ) : num == 2 ? (
            <Img2 className="stages__item-arr2" loading="lazy"/>

          ) : null
        ) : (
          num == 1 ? (
            <ImgDesk1 className="stages__item-arr1-desktop" loading="lazy"/>
          ) : num == 2 ? (
            <ImgDesk2 className="stages__item-arr2-desktop" loading="lazy"/>
          ) : null
        )
        }
      </li>

    </>
  );
}

export default StagesItem;