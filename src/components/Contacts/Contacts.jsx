import "./Contacts.css";
import "../Form/Form.css";
import Title from "../Title/Title";
import Form from "../Form/Form";
import { useFormik } from "formik";
import { useState } from "react";


function Contacts() {
  const [ isSubmit, setSubmit ] = useState( false );
  const titleText = "Напишите нам";
  const titleClass = "contacts__title";

  const validate = values => {
    const errors = {};
    if( !values.email ) {
      errors.email = "Введите email";
    }
    return errors;
  };

  const formik = useFormik( {
    initialValues: {
      email: "",
    },
    validate,
    onSubmit: (values, { resetForm }) => {
      setSubmit( true );
      setTimeout( () => {
        setSubmit( false );

      }, 3000 );
      alert( JSON.stringify( values, null, 2 ) );
      resetForm( { values: "" } );  // Очистка полей формы
    },
  } );

  return (
    <section className="contacts" id="contacts">
      <div className="container">
        <div className="contacts__email-block">

          <Title titleText={ titleText } titleClass={ titleClass }/>
          <p className="contacts__text">Оставьте заяку на E-mail</p>

          <form onSubmit={ formik.handleSubmit } className="form contacts__form">
            <input className="form__item contacts__form-input"
                   name="email"
                   id="email"
                   type="email"
                   placeholder={ formik.errors.email ? formik.errors.email : "E-mail" }/>
            <div className="button-block contacts__button-block">
              <button className="button" type="submit">Отправить заявку</button>
            </div>
            { isSubmit && <p className="status">Спасибо! Скоро мы с Вами свяжемся</p> }
          </form>

        </div>
        <div className="contacts__map">
          <iframe
            src="https://yandex.ru/map-widget/v1/?um=constructor%3A3b01fac069d69a78150d09ae8b3cbba129c1024a3da623a643dc3014ec8adb18&amp;source=constructor"
            width="100%" height="351" frameBorder="0" />
        </div>

      </div>
    </section>
  );
}

export default Contacts;