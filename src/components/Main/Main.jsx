import Header from "../Header/Header";
import Banner from "../Banner/Banner";
import Modal from "../Modal/Modal";
import { selectModal } from "../../store/modal/modalSelectors";
import { useDispatch, useSelector } from "react-redux";
import About from "../About/About";
import OurWorks from "../OurWorks/OurWorks";
import Stages from "../Stages/Stages";
import StagesBanner from "../Stages/StagesBanner";
import Materials from "../Materials/Materials";
import { getModal } from "../../store/modal/modalActions";
import Products from "../Products/Products";
import Reviews from "../Reviews/Reviews";
import Contacts from "../Сontacts/Сontacts";

function Main() {
  const isModalOpen = useSelector( selectModal );
  const dispatch = useDispatch();

  const handleOpenModal = () => {
    dispatch( getModal( true ) );
  };

  return (

    <div className="main">
      <h1 className="visually-hidden">"Окна Премьер" - изготовление пластиковых окон и балконов</h1>
      <Banner handleOpenModal={ handleOpenModal }/>
      <About handleOpenModal={ handleOpenModal }/>
      <OurWorks/>
      <Stages/>
      <StagesBanner/>
      <Materials handleOpenModal={ handleOpenModal }/>
      <Products/>
      <Reviews />
      <Contacts />

      { isModalOpen && <Modal/> }
    </div>

  );
}

export default Main;