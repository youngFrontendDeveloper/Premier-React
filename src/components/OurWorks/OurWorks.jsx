import "./OurWorks.css";
import Title from "../Title/Title";
import Gallery from "../Gallery/Gallery";

function OurWorks() {
  const titleText = "Наша продукция";
  const titleClass = "our-works__title";
  return (
    <section className="our-works" id="our-works">
      <div className="container">
        <Title titleText={ titleText } titleClass={ titleClass }/>
        <Gallery />
      </div>
    </section>
  );
}

export default OurWorks;