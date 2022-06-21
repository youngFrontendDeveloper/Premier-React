import "./Form.css";
import "../Button/Button.css";
import { useFormik } from "formik";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getModal } from "../../store/modal/modalActions";

function Form({ formClass, isName }) {
  const [ isSubmit, setSubmit ] = useState( false );
  const [ checked, setChecked ] = useState( true );
  const dispatch = useDispatch();


  const validate = values => {
    const errors = {};
    if( isName ) {
      if( !values.name ) {
        errors.name = "Введите свое имя";
      }
    }

    if( !values.phone ) {
      // errors.phone = <div style={ { color: "red", marginBottom: "20px" } }>Введите свой телефон</div>;
      // errors.phone = <div className="form__error-phone">Введите свой телефон</div>;
      errors.phone = "Введите свой телефон";
    }
    // else if( values.phone.length > 16 ) {
    // errors.phone = <div style={ { color: "red", marginBottom: "20px" } }>Должно быть не более 16 цифр</div>;
    // errors.phone = <div className="form__error-phone">Должно быть не более 16 цифр</div>;
    // errors.phone = "Должно быть не более 16 цифр";
    // }
    console.log( errors );
    return errors;
  };

  const handleToggleConsent = () => {
    setChecked( !checked );
  };

  const formik = useFormik( {
    initialValues: {
      name: "",
      phone: "",
    },
    validate,
    onSubmit: (values, {resetForm}) => {
      setSubmit( true );
      setTimeout( () => {
        setSubmit( false );
        dispatch( getModal( false ) );
      }, 3000 );

        alert( JSON.stringify( values, null, 2 ) );
      resetForm({values: ""})   // Очистка полей формы
    },
  } );

  return (

    <form onSubmit={ formik.handleSubmit } className={ `form ${ formClass }` }>

      { isName && <input
        type="text"
        id="name"
        name="name"
        onChange={ formik.handleChange }
        value={ formik.values.name }
        className="form__item form__item--bgGrey"
        placeholder={ formik.errors.name ? formik.errors.name : "Имя" }
      /> }
      {/*{formik.errors.name ? <div >{ formik.errors.name }</div> : null*/ }


      <input
        type="text"
        id="phone"
        name="phone"
        onChange={ formik.handleChange }
        value={ formik.values.phone }
        className="form__item form__item--bgGrey"
        placeholder={ formik.errors.phone ? formik.errors.phone : "+7 (___)-___-__-__" }
      />
      {/*{ formik.errors.phone ? <div>{ formik.errors.phone }</div> : null }*/ }

      <label className="form__label">
        <input className="form__check" type="checkbox" onChange={ handleToggleConsent } checked={ checked }/>
        <span className="form__checkmark"/>
        Согласие на обработку персональных данных в соответствии с Политикой конфиденциальности.
      </label>

      <div className="button-block">
        <button type="submit" className="button">
          Отправить заявку
        </button>
      </div>
      { isSubmit && <p className="status">Спасибо! Скоро мы с Вами свяжемся</p> }
    </form>
  );

}

export default Form;
