import { useTranslation } from "react-i18next";
import HomeSocialMediaButtons from "../../components/HomeSocialMediaButtons";

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
        <img
          src="https://res.cloudinary.com/drenq2n4a/image/upload/v1733845706/wozat2hjz7lprwbijj31.png"
          alt={t("portfolio_image")}
          style={{ maxHeight: "65%", maxWidth: "65%" }}
        />
      </div>
    </section>
  );
};

export default Home;
