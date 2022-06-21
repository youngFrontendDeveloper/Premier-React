import "./Button.css";
import "../Button/Button.css";

function Button({ text, link, buttonClick, buttonClass }) {

  return (
    <div className={`button-block ${buttonClass}`} onClick={buttonClick}>
      <a href={ link } className="button banner__btn modal-btn">
        { text }
      </a>
    </div>
  );
}

export default Button;