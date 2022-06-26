import "./MyForm.css";
import "../Button/Button.css";
import { Formik, Form, Field } from "formik";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getModal } from "../../store/modal/modalActions";
import axios from "axios";
import { urlMessage } from "../../constants/url";


function MyForm({ formClass, isName, isPhone, isMail, isLabel }) {
  const [ isSubmit, setSubmit ] = useState( false );
  const [ isError, setError ] = useState( false );
  const dispatch = useDispatch();

  const sendMessage = async(url, values) => {
    try {
      const response = await axios.post( url, values );
      console.log( values );
      console.log( response );
      setSubmit( true );
    } catch( error ) {
      setError( true );
      console.log( values );
      console.log( error.message );
    }
  };

  return (

    <Formik
      initialValues={ {
        name: "",
        phone: "",
        email: "",
        toggle: true,
        // user_id: "12",
        // message: "This is a test message"
      } }
      validate={ values => {
        const errors = {};
        if( isName ) {
          if( !values.name ) {
            errors.name = "Введите свое имя";
          }
        }
        if( isPhone ) {
          if( !values.phone ) {
            errors.phone = "Введите свой телефон";
          }
        }
        if( isMail ) {
          if( !values.email ) {
            errors.email = "Введите email";
          }
        }
        console.log( errors );
        return errors;
      } }
      onSubmit={ async(values, { resetForm }) => {
        await sendMessage( urlMessage, values );

        setTimeout( () => {
          setSubmit( false );
          setError( false );
          dispatch( getModal( false ) );
        }, 3000 );

        alert( JSON.stringify( values, null, 2 ) );
        resetForm( { values: "" } );   // Очистка полей формы
      }
      }
      handleChange
    >
      { ({ values, errors }) => (


        <Form
          className={ `form ${ formClass }` }>

          { isName && <Field
            type="text"
            // id="name"
            name="name"
            value={ values.name }
            className="form__item form__item--bgGrey"
            placeholder={ errors.name ? errors.name : "Имя" }
          /> }

          { isPhone && <Field
            type="text"
            // id="phone"
            name="phone"
            value={ values.phone }
            className="form__item form__item--bgGrey"
            placeholder={ errors.phone ? errors.phone : "+7 (___)-___-__-__" }
          />
          }

          { isMail && <Field
            className="form__item form__item-mail"
            name="email"
            // id="email"
            type="email"
            placeholder={ errors.email ? errors.email : "E-mail" }/>
          }

          { isLabel && <label className="form__label">
            <Field className="form__check"
                   type="checkbox"
                   name="toggle"
            />
            <span className="form__checkmark"/>
            Согласие на обработку персональных данных в соответствии с Политикой конфиденциальности.
          </label>
          }

          <div className="button-block">
            <button type="submit" className="button">
              Отправить заявку
            </button>
          </div>
          { isSubmit ? <p className="form__status-success">Спасибо! Скоро мы с Вами свяжемся</p> : isError ? (
            <p className="form__status-error">Ошибка на сервере. Сообщение не отправлено</p> ) : null }
        </Form>
      ) }
    </Formik>
  );
}


export default MyForm;
