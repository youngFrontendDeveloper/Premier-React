import "./Stages.css";

function StagesItem({ num, stagesText }) {

  return (
    <>
      <li className="stages__item">
        <span className="stages__item-number">{ num }</span>
        <span className="stages__item-text">{ stagesText }</span>
      </li>

    </>
  );
}

export default StagesItem;