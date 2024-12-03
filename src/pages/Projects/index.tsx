import { useEffect, useRef } from "react";
import PageTitle from "../../components/PageTitle";
import { useTranslation } from "react-i18next";

const Projects: React.FC = () => {
  const { t } = useTranslation();
  const firstRadioRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (firstRadioRef.current) {
      firstRadioRef.current.checked = true;
    }
  }, []);

  return (
    <section
      id="#projects"
      style={{ marginTop: "1%", flexDirection: "column" }}
    >
      <PageTitle title={t("projects")} />
      <div className={"slider"}>
        <div></div>
        <div className="slides">
          <input
            ref={firstRadioRef}
            type="radio"
            name="radio-btn"
            id="radio1"
          />
          <input type="radio" name="radio-btn" id="radio2" />
          <input type="radio" name="radio-btn" id="radio3" />
          <input type="radio" name="radio-btn" id="radio4" />

          <div
            className={"slide first"}
            style={{ backgroundColor: "red" }}
          ></div>
          <div className={"slide"} style={{ backgroundColor: "brown" }}></div>
          <div className={"slide"} style={{ backgroundColor: "yellow" }}></div>
          <div className={"slide"} style={{ backgroundColor: "blue" }}></div>

          <div className="navigation-auto">
            <div className="auto-btn1"></div>
            <div className="auto-btn2"></div>
            <div className="auto-btn3"></div>
            <div className="auto-btn4"></div>
          </div>
        </div>
        <div></div>

        <div className="manual-navigation">
          <label htmlFor="radio1" className="manual-btn"></label>
          <label htmlFor="radio2" className="manual-btn"></label>
          <label htmlFor="radio3" className="manual-btn"></label>
          <label htmlFor="radio4" className="manual-btn"></label>
        </div>
      </div>
      {/* <div className="projects-container">
        <div className="pages-container-columns">
          <img src="projeto-template.png" style={{ width: "70%" }} />
        </div>
        <div className="pages-container-columns">
          <h1>{t("working_on_projects")}</h1>
        </div>
      </div> */}
    </section>
  );
};

export default Projects;
