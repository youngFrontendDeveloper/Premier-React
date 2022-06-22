import "./Phone.css";

function Phone({phoneClass}) {
  return (
      <a href="tel:+79999214124" className={phoneClass}>+7 999 921 41 24</a>
  );
}

export default Phone;