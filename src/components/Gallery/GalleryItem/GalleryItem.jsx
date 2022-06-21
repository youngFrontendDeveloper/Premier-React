import "./GalleryItem.css";
import Arrow from "../../Arrow/Arrow";
import MediaQuery from "react-responsive";


function GalleryItem({ item }) {
  return (
    <>
      <figure className="card gallery__item">

        <MediaQuery minWidth={ 768 }>
          <img className="card__img" src={  item.imgDesk1  }
               srcSet={ `${ item.imgDesk2 } 2x` }
               alt="Наша продукция"/>
        </MediaQuery>
        <MediaQuery maxWidth={ 768 }>
          <img className="card__img" src={  item.img1  }
               srcSet={ `${ item.img2 } 2x` }
               alt="Наша продукция"
          />
        </MediaQuery>

        <figcaption className="card__text-block">
          <h4 className="card__title">{ item.title }</h4>
          <p className="card__text">{ item.text }</p>
          <a href="tel:+79999214124" className="link card__link">Заказать бесплатный замер
            <Arrow/>
          </a>
        </figcaption>
      </figure>

    </>

  );
}

export default GalleryItem;