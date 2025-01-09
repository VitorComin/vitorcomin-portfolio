import AboutMeLittleList from "../../components/AboutMeLittleList";
import MySkills from "../../components/MySkills";
import PageTitle from "../../components/PageTitle";
import { useTranslation } from "react-i18next";

const About: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section id="#about" className="pages-sections">
      <PageTitle title={t("about_me")} />
      <div className="pages-container">
        <div className="pages-container-columns" style={{ padding: "0 4%" }}>
          <div style={{ width: "100%", height: "fit-content" }}>
            <div style={{ width: "fit-content", marginBottom: "4%" }}>
              <span style={{ fontSize: "22px" }}>{t("little_about_me")}</span>
              <div
                className="brown-line"
                style={{ width: "100%", height: 2 }}
              />
            </div>
            <span className="about-me-text">
              {t("about_me_text")}
              <AboutMeLittleList />
              <br />
            </span>
            <div style={{ width: "fit-content", margin: "4% 0" }}>
              <span style={{ fontSize: "22px" }}>{t("my_skills")}</span>
              <div
                className="brown-line"
                style={{ width: "100%", height: 2 }}
              />
            </div>
            <MySkills />
          </div>
        </div>
        <div className="pages-container-columns page-image">
          <img
            src="https://res.cloudinary.com/drenq2n4a/image/upload/v1733845711/zavlxdpz5zpfemafdlsx.png"
            alt={t("portfolio_image")}
            style={{ maxHeight: "65%", maxWidth: "65%" }}
          />
        </div>
      </div>
    </section>
  );
};

export default About;
