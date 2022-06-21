import "./Materials.css";
import Title from "../Title/Title";
import MaterialsItem from "./MaterialsItem";
import MaterialsBanner from "./MaterialsBanner";
import { materials } from "../../constants/materials";

function Materials({handleOpenModal}) {
  const titleText = "Материалы";
  const titleClass = "materials__title";

  return (
    <section className="materials">
      <div className="container">
        <Title titleText={ titleText } titleClass={ titleClass }/>
        <div className="materials__items">
          { materials.map( item => (
            <MaterialsItem key={ item.img1 } item={ item }/>
          ) ) }

        </div>
      </div>
      <MaterialsBanner handleOpenModal={handleOpenModal}/>
    </section>
  );
}

export default Materials;