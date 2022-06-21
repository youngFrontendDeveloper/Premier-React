import "./Products.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import ProductsSliderItem from "./ProductsSliderItem";
import { products } from "../../constants/products";

function ProductsSlider() {

  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    variableWidth: true,
    swipeToSlide: true,
    // responsive: [
    //   {
    //     breakpoint: 1200,
    //     settings: {
    //       slidesToShow: 6,
    //       slidesToScroll: 1,
    //       infinite: true,
    //       rows: 2,
    //       slidesPerRow: 6,
    //       variableWidth: false,
    //
    //     }
    //   },
    //   {
    //     breakpoint: 600,
    //     settings: {
    //       slidesToShow: 2,
    //       slidesToScroll: 2,
    //       // initialSlide: 2
    //     }
    //   },
    //   {
    //     breakpoint: 470,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1,
    //       // initialSlide: 1
    //     }
    //   },
    //   ]
    // adaptiveHeight: true,
    // rows: 2,
    // slidesPerRow: 2
  };

  return (
    <Slider { ...settings } className="products__slider">
      {/*<div className="products__slider-img-wrap">*/}
        {
          products.map( item => (
            <ProductsSliderItem item={ item }/>
          ) )
        }
      {/*</div>*/}
    </Slider>
  );
}

export default ProductsSlider;