import { useState } from "react";
import PageTitle from "../../components/PageTitle";
import { useTranslation } from "react-i18next";
import { ArrowBack, ArrowFoward } from "../../assets/icons/Icons";

const Projects: React.FC = () => {
  const { t } = useTranslation();
  const [currentSlide, setCurrentSlide] = useState(1);

  return (
    <section
      id="#projects"
      style={{ marginTop: "1%", flexDirection: "column" }}
    >
      <PageTitle title={t("projects")} />
      <div className="projects-section-body">
        <button
          className="projects-arrow-buttons left"
          onClick={() =>
            currentSlide === 1
              ? setCurrentSlide(4)
              : setCurrentSlide(currentSlide - 1)
          }
        >
          <ArrowBack />
        </button>
        <div className={"slider"}>
          <div className="slides">
            <input
              type="radio"
              name="radio-btn"
              id="radio1"
              readOnly
              checked={currentSlide === 1}
            />
            <input
              type="radio"
              name="radio-btn"
              id="radio2"
              readOnly
              checked={currentSlide === 2}
            />
            <input
              type="radio"
              name="radio-btn"
              id="radio3"
              readOnly
              checked={currentSlide === 3}
            />
            <input
              type="radio"
              name="radio-btn"
              id="radio4"
              readOnly
              checked={currentSlide === 4}
            />

            <div className={"slide first"}>
              <div className="project-half-container">
                <img src="/projeto-portfolio.png" />
              </div>
              <div className="project-half-container project-description">
                <strong>{t("working_on_projects")}</strong>
                <br />
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  pulvinar aliquam elit at tincidunt. In sit amet imperdiet
                  diam. Donec ornare ligula sed mauris dictum, quis tincidunt
                  diam accumsan. Nulla quis porttitor sapien. Aliquam commodo
                  erat ante, in ullamcorper sem consequat sit amet. Donec
                  scelerisque sapien et eros laoreet, a vestibulum eros feugiat.
                </span>
              </div>
            </div>
            <div className={"slide"}>
              <div className="project-half-container">
                <img src="/projeto-portfolio.png" />
              </div>
              <div className="project-half-container project-description">
                <strong>{t("working_on_projects")}</strong>
                <br />
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  pulvinar aliquam elit at tincidunt. In sit amet imperdiet
                  diam. Donec ornare ligula sed mauris dictum, quis tincidunt
                  diam accumsan. Nulla quis porttitor sapien. Aliquam commodo
                  erat ante, in ullamcorper sem consequat sit amet. Donec
                  scelerisque sapien et eros laoreet, a vestibulum eros feugiat.
                </span>
              </div>
            </div>
            <div className={"slide"}>
              <div className="project-half-container">
                <img src="/projeto-portfolio.png" />
              </div>
              <div className="project-half-container project-description">
                <strong>{t("working_on_projects")}</strong>
                <br />
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  pulvinar aliquam elit at tincidunt. In sit amet imperdiet
                  diam. Donec ornare ligula sed mauris dictum, quis tincidunt
                  diam accumsan. Nulla quis porttitor sapien. Aliquam commodo
                  erat ante, in ullamcorper sem consequat sit amet. Donec
                  scelerisque sapien et eros laoreet, a vestibulum eros feugiat.
                </span>
              </div>
            </div>
            <div className={"slide"}>
              <div className="project-half-container">
                <img src="/projeto-portfolio.png" />
              </div>
              <div className="project-half-container project-description">
                <strong>{t("working_on_projects")}</strong>
                <br />
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  pulvinar aliquam elit at tincidunt. In sit amet imperdiet
                  diam. Donec ornare ligula sed mauris dictum, quis tincidunt
                  diam accumsan. Nulla quis porttitor sapien. Aliquam commodo
                  erat ante, in ullamcorper sem consequat sit amet. Donec
                  scelerisque sapien et eros laoreet, a vestibulum eros feugiat.
                </span>
              </div>
            </div>

            <div className="navigation-auto">
              <div className="auto-btn1"></div>
              <div className="auto-btn2"></div>
              <div className="auto-btn3"></div>
              <div className="auto-btn4"></div>
            </div>
          </div>

          <div className="manual-navigation">
            <label
              htmlFor="radio1"
              onClick={() => setCurrentSlide(1)}
              className="manual-btn"
            ></label>
            <label
              htmlFor="radio2"
              onClick={() => setCurrentSlide(2)}
              className="manual-btn"
            ></label>
            <label
              htmlFor="radio3"
              onClick={() => setCurrentSlide(3)}
              className="manual-btn"
            ></label>
            <label
              htmlFor="radio4"
              onClick={() => setCurrentSlide(4)}
              className="manual-btn"
            ></label>
          </div>
        </div>
        <button
          className="projects-arrow-buttons right"
          onClick={() =>
            currentSlide === 4
              ? setCurrentSlide(1)
              : setCurrentSlide(currentSlide + 1)
          }
        >
          <ArrowFoward />
        </button>
      </div>
    </section>
  );
};

export default Projects;
