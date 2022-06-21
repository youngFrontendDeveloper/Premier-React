import Button from "../../Button/Button";


function BannerTextBox({handleOpenModal}) {
  const buttonText = "Отправить заявку";

  return (
    <div className="banner__text-block">
      <span className="banner__text">Скидка до</span>
      <span className="banner__big-text">50%</span>
      <span className="banner__small-text">На пластиковые окна</span>
      <span className="banner__yellow-text">и гарантированный подарок</span>
      <Button text={ buttonText } buttonClick={handleOpenModal} buttonClass="button-block button-block--white"/>

    </div>
  );
}

export default BannerTextBox;