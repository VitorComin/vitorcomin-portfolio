import { useTranslation } from "react-i18next";
import HomeSocialMediaButtons from "../../components/HomeSocialMediaButtons";
import { homePageImage } from "../../utils/configs";

const Home: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="#home" className={"home-section"}>
      <div className="pages-container-columns home-page-texts-container">
        <span className="home-page-texts">{t("hello")}👋</span>
        <span className="my-name-is">{t("my_name")}</span>
        <span className="home-page-texts">{t("developer")}</span>
        <HomeSocialMediaButtons />
      </div>
      <div className="pages-container-columns home-page-image">
        <img src={homePageImage} alt={t("portfolio_image")} />
      </div>
    </section>
  );
};

export default Home;
