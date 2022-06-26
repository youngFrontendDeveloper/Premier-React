import "./About.css";
import Slogan from "../Slogan/Slogan";
import Button from "../Button/Button";

function AboutBanner({handleOpenModal}) {
  const sloganText = "Выполним любой ваш заказ в кротчайшие сроки ";
  const sloganClass = "about__slogan";
  const buttonText="Отправить заявку";

  return (
    <section className="about__banner">
      <div className="container">
        <Slogan sloganText={ sloganText } sloganClass={ sloganClass }/>
        <p className="about__banner-text">Изготовим по вашим эскизам<br/>
          от <span className="about__bold">7 дней</span>
        </p>
        <Button text={buttonText} buttonClick={handleOpenModal}  />
      </div>
    </section>
  );
}

export default AboutBanner;