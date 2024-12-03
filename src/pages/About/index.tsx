import {
  GraduationIcon,
  LocationIcon,
  WorkIcon,
} from "../../assets/icons/Icons";
import MySkills from "../../components/MySkills";
import PageTitle from "../../components/PageTitle";
import { useTranslation } from "react-i18next";

const About: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section
      id="#about"
      style={{
        flexDirection: "column",
        marginTop: "5%",
      }}
    >
      <PageTitle title={t("about_me")} />
      <div
        style={{
          height: "100%",
          width: "100%",
          flexDirection: "row",
          display: "flex",
        }}
      >
        <div className="pages-container-columns" style={{ padding: "0 4%" }}>
          <div
            style={{
              width: "100%",
              height: "fit-content",
            }}
          >
            <div style={{ width: "fit-content", marginBottom: "4%" }}>
              <span style={{ fontSize: "22px" }}>{t("little_about_me")}</span>
              <div
                className="brown-line"
                style={{ width: "100%", height: 2 }}
              />
            </div>
            <span
              style={{
                fontSize: 16,
                color: "#575757",
                wordBreak: "break-word",
                margin: "4% 0",
              }}
            >
              {t("about_me_text")}
              <ul style={{ marginBottom: 0 }}>
                <li>
                  <GraduationIcon /> {t("education")}
                </li>
                <li>
                  <WorkIcon /> {t("work")}{" "}
                  <a
                    className="company-link"
                    href={"https://tiflux.com/"}
                    target="_blank"
                  >
                    Tiflux
                  </a>
                  .
                </li>
                <li>
                  <LocationIcon /> {t("location")}
                </li>
              </ul>
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
            src="/segunda-foto-vitor-portfolio.png"
            alt="Template"
            style={{ height: "70%" }}
          />
        </div>
      </div>
    </section>
  );
};

export default About;
