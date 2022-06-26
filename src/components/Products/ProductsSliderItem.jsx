import "./Products.css";
import { useMediaQuery } from "react-responsive";

function ProductsSliderItem({ item, index, numberOfSlides }) {
  const isMobile = useMediaQuery( {
    query: "(max-width: 1200px)"
  } );

  return (
    <>
      {
        isMobile ? ( <img src={ item.img1 } alt="Наши работы"/> ) : (
          <img src={ item.imgDesk1 } srcSet={ item.imgDesk2 } alt="Наши работы"/>
        )
      }
    </>
  );
}

export default ProductsSliderItem;