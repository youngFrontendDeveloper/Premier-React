import "./Сontacts.css";
import Title from "../Title/Title";
import Form from "../Form/Form";
import { useFormik } from "formik";


function Contacts() {
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
      alert( JSON.stringify( values, null, 2 ) )
      resetForm( { values: "" } )  // Очистка полей формы
    },
  })

  return (
    <section className="contacts" id="contacts">
      <div className="container">
        <div className="contacts__email-block">

          <Title titleText={ titleText } titleClass={ titleClass }/>
          <p>
            <a href="#products" className="contacts__text-mob">Завершенные работы для наших
              клиентов представленны выше</a>
          </p>
          <p className="contacts__text">Оставьте заяку на E-mail</p>

          <form onSubmit={formik.handleSubmit} className="form contacts__form">
            <input className="form__item contacts__form-input"
                   name="email"
                   id="email"
                   type="email"
                   placeholder={formik.errors.email ? formik.errors.email : "E-mail"}/>
            <div className="button-block contacts__button-block">
              <button className="button" type="submit">Отправить заявку</button>
            </div>
          </form>

        </div>

      </div>
    </section>
  );
}

export default Contacts;