import "./Reviews.css";
import Title from "../Title/Title";
import ReviewsSlider from "./ReviewsSlider";

function Reviews() {
  const titleText = "Отзывы";
  const titleClass = "reviews__title";

  return (
    <section className="reviews" id="reviews">
      <div className="container">
        <Title titleText={ titleText } titleClass={ titleClass }/>
        <ReviewsSlider />
      </div>
    </section>
  );
}

export default Reviews;
