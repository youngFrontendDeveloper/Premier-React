import "./Contacts.css";
import Title from "../Title/Title";
import MyForm from "../MyForm/MyForm";


function Contacts() {
  const formClass = "contacts__form";
  const isName = false;
  const isPhone = false;
  const isLabel = false;
  const isMail = true;
  const titleText = "Напишите нам";
  const titleClass = "contacts__title";

  return (
    <section className="contacts" id="contacts">
      <div className="container">
        <div className="contacts__email-block">

          <Title titleText={ titleText } titleClass={ titleClass }/>
          <p className="contacts__text">Оставьте заяку на E-mail</p>

          <MyForm formClass={ formClass } isName={ isName } isPhone={ isPhone } isMail={ isMail } isLabel={ isLabel }/>

        </div>
        <div className="contacts__map">
          <iframe
            src="https://yandex.ru/map-widget/v1/?um=constructor%3A3b01fac069d69a78150d09ae8b3cbba129c1024a3da623a643dc3014ec8adb18&amp;source=constructor"
            width="100%" height="351" frameBorder="0" loading="lazy"/>
        </div>

      </div>
    </section>
  );
}

export default Contacts;