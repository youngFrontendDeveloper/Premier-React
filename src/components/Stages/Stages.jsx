import "./Stages.css";
import Title from "../Title/Title";
import StagesItem from "./StagesItem";

function Stages() {
  const titleText = "Этапы работы";
  const titleClass = "stages__title";
  const num1 = 1;
  const num2 = 2;
  const num3 = 3;
  const stagesText1="Бесплатный выезд к заказчику и бесплатный замер окон"
  const stagesText2="Изготовление окон из высококачественного материала с точным соблюдением сроков"
  const stagesText3="Установка окон у заказчика"

  return (
    <section className="stages" id="stages-work">
      <div className="container">
        <Title titleText={ titleText } titleClass={ titleClass }/>
        <ul className="stages__list">
          <StagesItem num={ num1 } stagesText={stagesText1}/>
          <StagesItem num={ num2 } stagesText={stagesText2}/>
          <StagesItem num={ num3 } stagesText={stagesText3}/>
        </ul>
      </div>
    </section>
  );
}

export default Stages;