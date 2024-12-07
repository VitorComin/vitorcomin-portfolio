import { useState } from "react";
import PageTitle from "../../components/PageTitle";
import { useTranslation } from "react-i18next";
import { ArrowBack, ArrowFoward } from "../../assets/icons/Icons";
import ProjectSlide from "../../components/ProjectSlide";
import { projects } from "../../utils/configs";

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
            {[1, 2, 3, 4].map((slide) => (
              <input
                key={slide}
                type="radio"
                name="radio-btn"
                id={`radio${slide}`}
                readOnly
                checked={currentSlide === slide}
              />
            ))}

            {projects.map((project) => (
              <ProjectSlide project={project} />
            ))}
          </div>

          <div className="manual-navigation">
            {[1, 2, 3, 4].map((slide) => (
              <label
                key={slide}
                style={{
                  backgroundColor: currentSlide === slide ? "#d46a00" : "",
                }}
                htmlFor={`radio${slide}`}
                onClick={() => setCurrentSlide(slide)}
                className="manual-btn"
              ></label>
            ))}
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
