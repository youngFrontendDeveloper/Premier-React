import "./Materials.css";
import { useState } from "react";
import MaterialsBannerItem from "./MaterialsBannerItem";
import { wood, usual } from "../../constants/materials";
import Button from "../Button/Button";


function MaterialsBanner({ handleOpenModal }) {
  const [ isWood, setWood ] = useState( true );
  const buttonText = "Задать вопрос менеджеру";

  const handleChangeColor = () => {
    setWood( !isWood );
  };

  return (
    <div className="materials__banner">
      <div className="container">

        <p className="slogan materials__slogan">Надоели обычные окна?
          <span className="slogan__green">Заказывайте с
              ламинацией
          </span>
        </p>

        <div className="materials__tabs tabs">
          <button
            className={ isWood ? "tabs__title tabs__title-colors-wood tabs__title--active" : "tabs__title tabs__title-colors-wood" }
            onClick={ handleChangeColor }>
            Под дерево
          </button>
          <button
            className={ isWood ? "tabs__title tabs__title-colors-usual" : "tabs__title tabs__title-colors-usual tabs__title--active" }
            onClick={ handleChangeColor }>
            Обычные цвета
          </button>
        </div>


        <div className="tabs__content">
          {
            isWood ?
              ( <div className="tabs__content-item ">
                {
                  wood.map( (item, index) => (
                    <MaterialsBannerItem key={ `materials-${ index }` } item={ item }/>
                  ) )
                }

              </div> ) :


              ( <div className="tabs__content-item ">
                {
                  usual.map( item => (
                    <MaterialsBannerItem item={ item }/>
                  ) )
                }

              </div> ) }
        </div>

        <Button text={ buttonText } buttonClick={ handleOpenModal }/>
      </div>

    </div>
  );
}

export default MaterialsBanner;