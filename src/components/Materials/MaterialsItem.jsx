import "./Materials.css";
import { useMediaQuery } from "react-responsive";

function MaterialsItem({ item }) {
  const isMobile = useMediaQuery( {
    query: "(max-width: 1200px)"
  } );

  return (
    <div className="materials__item">
      <div>

        { isMobile ? <img className="materials__img" src="./img/materials-1.png" srsset="./img/materials-1@2x.png 2x"
                          alt="Материал для рамы окон" /> :
          <img className="materials__img" src={ item.img1 } srsset={ item.img2 } loading="lazy" alt="Материал для рамы окон" /> }
      </div>
      <div className="materials__name-block">
        { isMobile ? <img className="materials__name" src={ item.manufacturer1 } srsset={ item.manufacturer2 }
                          loading="lazy" alt="Материал для рамы окон" width={item.width} height={item.height}/> :
          <img className="materials__name" src={ item.manufacturerDesk1 } srsset={ item.manufacturerDesk2 }
               loading="lazy" alt="Материал для рамы окон" width={item.width} height={item.height}/> }
      </div>
    </div>
  );
}

export default MaterialsItem;