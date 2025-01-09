import AboutMeLittleList from "../../components/AboutMeLittleList";
import MySkills from "../../components/MySkills";
import PageContentTitles from "../../components/PageContentTitles";
import PageTitle from "../../components/PageTitle";
import { useTranslation } from "react-i18next";
import { aboutPageImage } from "../../utils/configs";

const About: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section id="#about" className="pages-sections">
      <PageTitle title={t("about_me")} />
      <div className="pages-container">
        <div className="pages-container-columns" style={{ padding: "0 4%" }}>
          <div className={"about-me-text-container"}>
            <PageContentTitles title={t("little_about_me")} />
            <span className="about-me-text">
              {t("about_me_text")}
              <AboutMeLittleList />
              <br />
            </span>
            <PageContentTitles title={t("my_skills")} />
            <MySkills />
          </div>
        </div>
        <div className="pages-container-columns about-page-image">
          <img src={aboutPageImage} alt={t("portfolio_image")} />
        </div>
      </div>
    </section>
  );
};

export default About;
