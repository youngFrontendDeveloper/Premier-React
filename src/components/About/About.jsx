import "./About.css";
import about2x from "./img/about1@2x.jpg";
import aboutDesktop2x from "./img/about1desktop@2x.jpg";
import Title from "../Title/Title";
import AboutBanner from "./AboutBanner";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-scroll";

function About({ handleOpenModal }) {
  const titleText = "О нас";
  const titleClass = "about__title";

  const isMobile = useMediaQuery( {
    query: "(max-width: 768px)"
  } );


  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <Title titleText={ titleText } titleClass={ titleClass }/>
          <div className="about__wrapper">
            <div className="about__img-block">
              {
                isMobile ? ( <img className="about__img" src={ require( "./img/about1.jpg" ) }
                                  srcSet={ `${ about2x } 2x` }
                                  alt="Установка пластиковых окон"/> )
                  : ( <img className="about__img" src={ require( "./img/about1desktop.jpg" ) }
                           srcSet={ `${ aboutDesktop2x } 2x` }
                           alt="Установка пластиковых окон"/> )
              }

              <div className="warranty about__warranty">
                <div className="warranty__text">
                  <span className="warranty__number">5</span>
                  <span className="warranty__big-text">лет</span> гарантия

                </div>
              </div>
            </div>

            <div className="about__text-block">
              <h3 className="subtitle about__subtitle">Лучшая продуктивность
                с нашей компанией</h3>
              <p className="about__text">
                Равным образом структура организации представляет собой интересный проверки систем массового участия.
                Равным
                образом укрепление и развитие структуры позволяет оценить предложения
              </p>
              <div className="info about__info">
                <div className="info-item">
                  <div className="info__number">5</div>
                  <div className="info__text">лет на рынке</div>
                </div>
                <div className="info-item">
                  <div className="info__number">20</div>
                  <div className="info__text">постоянных клиентов</div>
                </div>
                <div className="info-item">
                  <div className="info__number">890</div>
                  <div className="info__text">сданных объектов</div>
                </div>
                <div className="info-item">
                  <div className="info__number">10+</div>
                  <div className="info__text">компаний партнеров</div>
                </div>
              </div>
              <div className="about__button-block">
                <Link to="our-works"
                      spy={ true }
                      smooth={ true }
                      duration={ 500 }
                      className="button">
                  Посмотреть работы
                </Link>
              </div>

            </div>
          </div>
        </div>
      </section>
      <AboutBanner handleOpenModal={ handleOpenModal }/>
    </>
  );
}

export default About;
