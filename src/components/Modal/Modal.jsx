import "./Modal.css";
import MyForm from "../MyForm/MyForm";
import { useDispatch } from "react-redux";
import { getModal } from "../../store/modal/modalActions";

function Modal() {
  const dispatch = useDispatch();
  const formClass = " modal__form";
  const isName = true;
  const isPhone = true;
  const isMail = false;
  const isLabel = true;
  const handleCloseModal = () => {
    dispatch( getModal( false ) );
  };

  return (
    <section className="modal-block modal-block--show">
      <div className="modal__wrap">
        <div className="modal">
          <div className="modal__btn--close" onClick={ handleCloseModal } />
          <p className="modal__text">Напишите нам</p>
          <MyForm formClass={ formClass } isName={ isName } isPhone={ isPhone } isMail={ isMail } isLabel={ isLabel }/>
        </div>
      </div>

    </section>
  );
}

export default Modal;