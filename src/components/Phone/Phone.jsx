import "./Phone.css";

function Phone() {
  return (
    <p>
      <strong className="phone__text">Бесплатный звонок:</strong>
      <a href="tel:+79999214124" className="link phone__link">+7 999 921 41 24</a>
    </p>
  );
}

export default Phone;