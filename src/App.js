import "./App.css";

import Main from "./components/Main/Main";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { useDispatch } from "react-redux";
import { getModal } from "./store/modal/modalActions";

function App() {
  const dispatch = useDispatch();

  const handleOpenModal = () => {
    dispatch( getModal( true ) );
  };
  return (
    <>
      <Header/>
      <Main handleOpenModal={ handleOpenModal }/>
      <Footer handleOpenModal={ handleOpenModal }/>
    </>
  );
}

export default App;
