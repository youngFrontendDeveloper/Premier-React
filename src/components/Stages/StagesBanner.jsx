import "./Stages.css";
import MyForm from "../MyForm/MyForm";


function StagesBanner() {
const formClass="stages__form";
const isName = false;
const isLabel = true;
const isMail = false;
const isPhone = true;

  return (
    <section className="stages__banner">
      <div className="container">
        <div className="stages__text-block">
          <p className="slogan stages__slogan">
            Оставьте заявку и получите <span className="slogan__green"> гарантированный подарок</span>
          </p>
          <MyForm formClass={formClass} isName={isName} isLabel={isLabel} isMail={isMail} isPhone={isPhone}/>
        </div>
      </div>
    </section>
  );
}

export default StagesBanner;