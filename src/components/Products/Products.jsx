import "./Products.css";
import Title from "../Title/Title";
import ProductsSlider from "./ProductsSlider";

function Products() {
  const titleText = "Наши работы";
  const titleClass = "products__title";

  return (
    <section className="products" id="products">
      <div className="container">
        <Title titleText={ titleText } titleClass={ titleClass }/>
        <p className="products__text">Завершенные работы для наших
          клиентов представленны ниже</p>
        <ProductsSlider/>
      </div>
    </section>
  );
}

export default Products;