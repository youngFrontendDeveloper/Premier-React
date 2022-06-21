import "./Gallery.css"

import { gallery } from "../../constants/gallery.js";
import GalleryItem from "./GalleryItem/GalleryItem";
function Gallery() {
  return (
    <section className="gallery">
      {gallery.map(item=>(
        <GalleryItem key={item.id} item={item}/>
      ))}
      {/*<figure className="card gallery__item">*/}
      {/*  <picture>*/}
      {/*    <source type="image/webp" media="(min-width: 768px)"*/}
      {/*            srcSet="img/works-1-desktop.webp 1x, img/works-1-desktop@2x.webp  2x"/>*/}
      {/*    <source media="(min-width: 768px)" srcSet="img/works-1-desktop.jpg, img/works-1-desktop@2x.jpg  2x"/>*/}
      {/*    <img className="card__img" src="img/works-1.jpg" srcSet="img/works-1.jpg 1x, img/works-1@2x.jpg 2x"*/}
      {/*         alt="Наша продукция" width="375" height="453"/>*/}
      {/*  </picture>*/}
      {/*  <figcaption className="card__text-block">*/}
      {/*    <h4 className="card__title">Пластиковые окна</h4>*/}
      {/*    <p className="card__text">Равным образом сложившаяся структура организации</p>*/}
      {/*    <a href="tel:+79999214124" className="link card__link">Заказать бесплатный замер*/}
      {/*      <Arrow />*/}
      {/*    </a>*/}
      {/*  </figcaption>*/}
      {/*</figure>*/}

      {/*<figure className="card gallery__item">*/}
      {/*  <picture>*/}
      {/*    <source type="image/webp" media="(min-width: 768px)"*/}
      {/*            srcSet="img/works-2-desktop.webp 1x, img/works-2-desktop@2x.webp  2x"/>*/}
      {/*    <source media="(min-width: 768px)" srcSet="img/works-2-desktop.jpg, img/works-2-desktop@2x.jpg  2x"/>*/}
      {/*    <img className="card__img" src="img/works-2.jpg" srcSet="img/works-2.jpg 1x, img/works-2@2x.jpg 2x"*/}
      {/*         alt="Наша продукция" width="375" height="453"/>*/}
      {/*  </picture>*/}
      {/*  <figcaption className="card__text-block card__text-block--bg-green">*/}
      {/*    <h4 className="card__title">Балконные рамы</h4>*/}
      {/*    <p className="card__text">Равным образом сложившаяся структура организации</p>*/}
      {/*    <a href="tel:+79999214124" className="link card__link">Заказать бесплатный замер*/}
      {/*      <Arrow />*/}
      {/*    </a>*/}
      {/*  </figcaption>*/}
      {/*</figure>*/}

      {/*<figure className="card gallery__item">*/}
      {/*  <picture>*/}
      {/*    <source type="image/webp" media="(min-width: 768px)"*/}
      {/*            srcSet="img/works-3-desktop.webp 1x, img/works-3-desktop@2x.webp  2x"/>*/}
      {/*    <source media="(min-width: 768px)" srcSet="img/works-3-desktop.jpg, img/works-1-desktop@2x.jpg  2x"/>*/}
      {/*    <img className="card__img" src="img/works-3.jpg" srcSet="img/works-3.jpg 1x, img/works-3@2x.jpg 2x"*/}
      {/*         alt="Наша продукция" width="375" height="453"/>*/}
      {/*  </picture>*/}
      {/*  <figcaption className="card__text-block">*/}
      {/*    <h4 className="card__title">Пластиковые перегородки</h4>*/}
      {/*    <p className="card__text">Равным образом сложившаяся структура организации</p>*/}
      {/*    <a href="tel:+79999214124" className="link card__link">Заказать бесплатный замер*/}
      {/*      <Arrow />*/}
      {/*    </a>*/}
      {/*  </figcaption>*/}
      {/*</figure>*/}

      {/*<figure className="card gallery__item">*/}
      {/*  <picture>*/}
      {/*    <source type="image/webp" media="(min-width: 768px)"*/}
      {/*            srcSet="img/works-4-desktop.webp 1x, img/works-4-desktop@2x.webp  2x"/>*/}
      {/*    <source media="(min-width: 768px)" srcSet="img/works-4-desktop.jpg, img/works-1-desktop@2x.jpg  2x"/>*/}
      {/*    <img className="card__img" src="img/works-4.jpg" srcSet="img/works-4.jpg 1x, img/works-4@2x.jpg 2x"*/}
      {/*         alt="Наша продукция" width="375" height="453"/>*/}
      {/*  </picture>*/}
      {/*  <figcaption className="card__text-block">*/}
      {/*    <h4 className="card__title">Алюминивые конструкции</h4>*/}
      {/*    <p className="card__text">Равным образом сложившаяся структура организации</p>*/}
      {/*    <a href="tel:+79999214124" className="link card__link">Заказать бесплатный замер*/}
      {/*      <Arrow />*/}
      {/*    </a>*/}
      {/*  </figcaption>*/}
      {/*</figure>*/}

      {/*<figure className="card gallery__item">*/}
      {/*  <picture>*/}
      {/*    <source type="image/webp" media="(min-width: 768px)"*/}
      {/*            srcSet="img/works-5-desktop.webp 1x, img/works-5-desktop@2x.webp  2x"/>*/}
      {/*    <source media="(min-width: 768px)" srcSet="img/works-5-desktop.jpg, img/works-1-desktop@2x.jpg  2x"/>*/}
      {/*    <img className="card__img" src="img/works-5.jpg" srcSet="img/works-5.jpg 1x, img/works-5@2x.jpg 2x"*/}
      {/*         alt="Наша продукция" width="375" height="453"/>*/}
      {/*  </picture>*/}
      {/*  <figcaption className="card__text-block card__text-block--bg-green">*/}
      {/*    <h4 className="card__title">Фасады</h4>*/}
      {/*    <p className="card__text">Равным образом сложившаяся структура организации</p>*/}
      {/*    <a href="tel:+79999214124" className="link card__link">Заказать бесплатный замер*/}
      {/*      <Arrow />*/}
      {/*    </a>*/}
      {/*  </figcaption>*/}
      {/*</figure>*/}
    </section>
  );
}

export default Gallery;