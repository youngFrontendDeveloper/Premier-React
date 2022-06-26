import "./Products.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import ProductsSliderItem from "./ProductsSliderItem";
import { products } from "../../constants/products";

function ProductsSlider() {
  const numberOfSlides = products.length;

  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    variableWidth: true,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,

        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 470,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      ]

  };

  return (
    <Slider { ...settings } className="products__slider">
      {
        products.map( (item, index) => (
          <ProductsSliderItem key={`slider-${index}`} item={ item } index={ index } numberOfSlides={numberOfSlides}/>

        ) )
      }
    </Slider>
  );
}

export default ProductsSlider;