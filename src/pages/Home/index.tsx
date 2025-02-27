import { useTranslation } from "react-i18next";
import HomeSocialMediaButtons from "../../components/HomeSocialMediaButtons";
import { useState } from "react";

const Home: React.FC = () => {
  const { t } = useTranslation();
  const [imageLoaded, setImageLoaded] = useState(false);

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
          src={"/imagem-vitor-home.jpg"}
          onLoad={() => setImageLoaded(true)}
          style={{ opacity: imageLoaded ? 1 : 0 }}
          alt={t("portfolio_image")}
        />
      </div>
    </section>
  );
};

export default Home;
