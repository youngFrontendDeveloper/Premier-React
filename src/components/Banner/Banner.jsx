import "./Banner.css";
import BannerTextBox from "./BannerTextBox/BannerTextBox";

function Banner({handleOpenModal}) {
  return (
    <section className="banner" >
      <div className="container banner__wrapper">
        <BannerTextBox handleOpenModal={handleOpenModal}/>
      </div>
    </section>
  );
}

export default Banner;