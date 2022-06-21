import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReviewsSliderItem from "./ReviewsSliderItem";
import { reviews } from "../../constants/reviews";

function ReviewsSlider() {
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <Slider { ...settings }>
      {
        reviews.map( item => (
          <ReviewsSliderItem item={ item }/>
        ) )
      }

    </Slider>

  );
}

export default ReviewsSlider;