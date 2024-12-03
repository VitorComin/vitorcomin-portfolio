import { GithubIcon, LinkedInIcon, MailIcon } from "../../assets/icons/Icons";
import { useTranslation } from "react-i18next";

const Home: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="#home" className={"home-section"}>
      <div className="pages-container-columns">
        <span style={{ fontSize: "clamp(1rem, 4vw, 2rem)", margin: "5px 0px" }}>
          {t("hello")}👋
        </span>
        <span
          style={{
            fontSize: "clamp(1rem, 7vw, 3rem)",
            color: "#d46a00",
            margin: "5px 0px",
          }}
        >
          {t("name")}
        </span>
        <span style={{ fontSize: "clamp(1rem, 4vw, 2rem)", margin: "5px 0px" }}>
          {t("developer")}
        </span>
        <div className="home-social-medias-container">
          <div className="brown-line" />
          <a
            href="https://www.github.com/VitorComin"
            target="_blank"
            className="home-social-media-icons"
          >
            <GithubIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/vitorgabrielcomin/"
            target="_blank"
            className="home-social-media-icons"
          >
            <LinkedInIcon />
          </a>
          <a
            href="mailto:vitorgabrielcomin@gmail.com"
            className="home-social-media-icons"
          >
            <MailIcon />
          </a>
          <div className="brown-line" />
        </div>
      </div>
      <div className="pages-container-columns page-image">
        <img
          src="/foto-vitor-portfolio-v2.png"
          alt="Template"
          style={{ height: "70%" }}
        />
      </div>
    </section>
  );
};

export default Home;
