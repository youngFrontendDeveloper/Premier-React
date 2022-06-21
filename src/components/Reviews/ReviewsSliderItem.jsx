import "./Reviews.css"

function ReviewsSliderItem({item}) {
  return (

      <figure className="reviews__item">
        <img className="reviews__item-img" src={item.img} alt="Фото человека, оставившего отзыв" width="86"
             height="86" />
          <figcaption>
            <h3 className="reviews__item-title">{item.name}</h3>
            <p className="reviews__item-text">{item.text}</p>
          </figcaption>
      </figure>

  );
}

export default ReviewsSliderItem;