import "./Modal.css";
import Form from "../Form/Form";
import { useDispatch } from "react-redux";
import { getModal } from "../../store/modal/modalActions";

function Modal() {
  const dispatch = useDispatch();
  const formClass=" modal__form";
  const isName = true;
  const handleCloseModal = () => {
    dispatch( getModal( false ) );
  };

  return (
    <section className="modal-block modal-block--show">
      <div className="modal__wrap">
        <div className="modal">
          <div className="modal__btn--close" onClick={ handleCloseModal }></div>
          <p className="modal__text">Позвоните мне</p>
          <Form formClass={formClass} isName={isName}/>
        </div>
      </div>

    </section>
  );
}

export default Modal;