import "./Stages.css";
import Form from "../Form/Form";


function StagesBanner() {
const formClass="stages__form";
const isName = false;

  return (
    <section className="stages__banner">
      <div className="container">
        <div className="stages__text-block">
          <p className="slogan stages__slogan">
            Оставьте заявку и получи <span className="slogan__green"> гарантированный подарок</span>
          </p>
          <Form formClass={formClass} isName={isName}/>
        </div>
      </div>
    </section>
  );
}

export default StagesBanner;