import { useTranslation } from "react-i18next";
import HomeSocialMediaButtons from "../../components/HomeSocialMediaButtons";

const Home: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="#home" className={"home-section"}>
      <div className="pages-container-columns">
        <span className="home-page-texts">{t("hello")}👋</span>
        <span className="my-name-is">{t("name")}</span>
        <span className="home-page-texts">{t("developer")}</span>
        <HomeSocialMediaButtons />
      </div>
      <div className="pages-container-columns page-image">
        <img
          src="/foto-vitor-portfolio.png"
          alt="Template"
          style={{ height: "70%" }}
        />
      </div>
    </section>
  );
};

export default Home;
