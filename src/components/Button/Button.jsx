import "./Button.css";
import "../Button/Button.css";

function Button({ text, link, buttonClick, buttonClass }) {

  return (
    <div className={`button-block ${buttonClass}`} onClick={buttonClick}>
      <a href={ link } className="button ">
        { text }
      </a>
    </div>
  );
}

export default Button;